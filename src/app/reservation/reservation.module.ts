import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { ReservationSchema } from '../../schema/reservation.schema'
import { ReservationOrderSchema } from '../../schema/reservation_order.schema'
import { MenuSchema } from '../../schema/menu.schema'
import { HelperService } from '../../helper/helper'

@Module({
  imports: [MongooseModule.forFeature([{ name: "reservation", schema: ReservationSchema }, { name: "reservation_order", schema: ReservationOrderSchema }, { name: "menu", schema: MenuSchema }])],
  controllers: [ReservationController],
  providers: [ReservationService, HelperService],
})
export class ReservationModule { }
