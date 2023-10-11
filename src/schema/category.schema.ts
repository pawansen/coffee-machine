import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop({ default: null })
  description: string;

  @Prop({ default: 1 })
  status: number;

  @Prop({ default: Date.now })
  createDate: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
