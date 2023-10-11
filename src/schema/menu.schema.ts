import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop({ default: null })
  code: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'category' })
  categoryId: Types.ObjectId;


  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: 1 })
  status: number;

  @Prop()
  discount: number;

  @Prop({ default: 0 })
  quantity: number;

  @Prop({ default: Date.now })
  createDate: Date;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
