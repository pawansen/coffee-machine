import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {

  @Prop({ default: null, type: SchemaTypes.ObjectId, ref: 'user' })
  userid: Types.ObjectId;

  @Prop({ default: null })
  startTime: string;

  @Prop({ default: null })
  endTime: string;

  @Prop({
    enum: ['Ongoing', 'Completed', 'Cancelled', 'Active', "Prepared"],
    default: 'Active',
  })
  status: string;

  @Prop({ enum: ['Cash', 'Online'], default: 'Cash' })
  paymentType: string;

  @Prop({ default: 0 })
  totalAmount: number;

  @Prop({ default: 0 })
  totalIteam: number;

  @Prop({ default: Date.now })
  createDate: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
