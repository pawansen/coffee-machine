import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationDocument } from 'src/schema/reservation.schema';
import { MenuDocument } from 'src/schema/menu.schema'
import { ReservationOrderDocument } from 'src/schema/reservation_order.schema';
import { HelperService } from '../../helper/helper'

@Injectable()
export class ReservationService {

  constructor(@InjectModel('reservation') private ReservationModel: Model<ReservationDocument>, @InjectModel('reservation_order') private ReservationOrderModel: Model<ReservationOrderDocument>, @InjectModel('menu') private MenuModel: Model<MenuDocument>, private helperService: HelperService) { }

  createReservation(createReservationDto: CreateReservationDto) {
    const schema = new this.ReservationModel(createReservationDto);
    return schema.save();
  }

  findMenu(payload: any) {
    return this.MenuModel.find(payload);
  }

  insertOrderMenu(payload: any) {
    return this.ReservationOrderModel.insertMany(payload);
  }


  findAll(filter: { pageNo: number, size: number, date: string }) {
    let limit: number = (filter.size !== undefined) ? Number(filter.size) : 10;
    let offset: number = (filter.pageNo !== undefined) ? Number(this.helperService.getOffset(Number(filter.pageNo), Number(filter.size))) : 0;
    let whr: any = { totalAmount: { $gt: 0 } }
    filter.date = new Date().toISOString().split('T')[0];
    console.log(filter.date)
    return this.ReservationModel.aggregate(
      [
        {
          "$lookup": {
            "from": "reservation_orders",
            "localField": "_id",
            "foreignField": "reservationId",
            "as": "order_details",
            "pipeline": [
              { "$lookup": {
                "from": "menus",
                "let": { "mid": "$menuId" },
                "pipeline": [
                  { "$match": { "$expr": { "$eq": ["$_id", "$$mid"] }}},
                  { "$project": { _id: 0, name: 1, description: 1} }
                ],
                "as": "menuInfo"
              }},
              { "$project": { reservationId: 1, menuId: 1, description: 1, quantity:1, price:1, totalPrice:1,menuInfo: { $arrayElemAt: ["$menuInfo", 0] }} }
            ],
          }
        },
        {
          $project: { _id: 1, assetId: 1, userid: 1, startTime: 1, endTime: 1, status: 1, totalAmount: 1, subTotalAmount: "$totalAmount", totalIteam: 1, orderDate: "$createDate", order_details: "$order_details" }
        },
        { "$sort": { createDate: -1 } },
      ]
    );

  }

  findOrderDetails(id: string) {
    return this.ReservationOrderModel.find({ reservationId: id })
  }


  updateReservation(id: string, updateReservationDto: any) {
    return this.ReservationModel.updateOne({ _id: id }, updateReservationDto);
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}

