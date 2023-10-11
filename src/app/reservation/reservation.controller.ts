import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import * as mongoose from 'mongoose';
import * as moment from 'moment';
import { ReservationService } from './reservation.service';
import { CreateReservationDto, CreateReservationOrderDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) { }

  @Post()
  create(@Body() createReservationOrderDto: CreateReservationOrderDto, @Res() response, @I18n() i18n: I18nContext) {
    try {


        const createReservation: CreateReservationDto = {
          startTime: moment().toISOString()
        };

        let menu: any = createReservationOrderDto.menu;
        let menuIds: Array<Object> = menu.map((a: any) => new mongoose.Types.ObjectId(a.menuId));
        this.reservationService.findMenu({ _id: { $in: menuIds } }).then((menuData: any) => {
          let order: { reservationId: any, menuId: string, quantity: number, price: number, discount: number, totalPrice: number }
          let orderPayload: { reservationId: string, menuId: string, quantity: number, price: number, discount: number, totalPrice: number, description: string }[] = []
          this.reservationService.createReservation(createReservation).then((data: any) => {
            let totalAmount: number = 0;
            let totalIteam: number = 0;
            for (let row of menuData) {
              let quanlityData: { menuId: string, quantity: number, description: string } = menu.find((o: any) => o.menuId === row._id.toString());
              let actitalPrice: number = row.price - (row.price * row.discount / 100)
              let order: { reservationId: any, menuId: string, quantity: number, price: number, discount: number, totalPrice: number, description: string } = {
                reservationId: data._id,
                menuId: row._id.toString(),
                quantity: quanlityData.quantity,
                description: quanlityData.description,
                price: row.price,
                discount: row.discount,
                totalPrice: quanlityData.quantity * actitalPrice
              }
              orderPayload.push(order)
              totalAmount += order.totalPrice;
              totalIteam += quanlityData.quantity;
            }
            this.reservationService.insertOrderMenu(orderPayload).then(async (order) => {
              await this.reservationService.updateReservation(data._id, { totalAmount: totalAmount, totalIteam: totalIteam });
              return response.status(HttpStatus.CREATED).json({
                statusCode: 200,
                message: i18n.t('events.reservation.add'),
                order,
              });
            })
          })
        })
    

    } catch (err) {
      console.log(err)
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.reservation.error'),
        error: err,
      });
    }
  }

  @Get()
  findAll(@Res() response, @I18n() i18n: I18nContext, @Query() filter: { pageNo: number, size: number, date: string }) {
    this.reservationService.findAll(filter).then((data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].tax = ((data[i].totalAmount * 18) / 100).toFixed(2)
        data[i].discount = 0;
        for (let row of data[i].order_details) {
          data[i].discount += row.discount;
        }
        data[i].totalAmount = (Number(data[i].subTotalAmount) + Number(data[i].tax)) - Number(data[i].discount);
      }
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.bad_Request'),
        error: err,
      });
    })
  }


  @Get(':id')
  findOne(@Param('id') id: string, @Res() response, @I18n() i18n: I18nContext) {
    this.reservationService.findOrderDetails(id).then((data: any) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.bad_Request'),
        error: err,
      });
    })
  }


}
