import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

export type ReservationOrderDocument = ReservationOrder & Document;

@Schema()
export class ReservationOrder {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'reservation' })
  reservationId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'user' })
  userid: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'menu' })
  menuId: Types.ObjectId;

  @Prop({ default: null })
  description: string;

  @Prop({ default: 0 })
  quantity: number;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: 0 })
  discount: number;

  @Prop({ default: 0 })
  totalPrice: number;

  @Prop({ default: Date.now })
  createDate: Date;
}

export const ReservationOrderSchema =
  SchemaFactory.createForClass(ReservationOrder);
