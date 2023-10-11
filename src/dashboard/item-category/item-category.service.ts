import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemCategoryDto } from './dto/create-item-category.dto';
import { UpdateItemCategoryDto, UpdateStatusCategoryDto } from './dto/update-item-category.dto';
import { GetItemCategoryDto } from './dto/get-item-category.dto';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { HelperService } from '../../helper/helper'

@Injectable()
export class ItemCategoryService {
  constructor(
    @InjectModel('category') private ItemCategoryModel: Model<CategoryDocument>,
    private helperService: HelperService
  ) { }

  create(createItemCategoryDto: CreateItemCategoryDto) {
    const category = new this.ItemCategoryModel(createItemCategoryDto);
    return category.save();
  }

  findOneByName(createItemCategoryDto: CreateItemCategoryDto) {
    return this.ItemCategoryModel.findOne({ name: createItemCategoryDto.name });
  }

  findAll(filter: { pageNo: number, size: number }) {
    let limit: number = (filter.size !== undefined) ? filter.size : 50;
    let offset: number = (filter.pageNo !== undefined) ? this.helperService.getOffset(Number(filter.pageNo), Number(filter.size)) : 0;
    return this.ItemCategoryModel.find();
    //return this.ItemCategoryModel.find().skip(offset).limit(limit);
  }

  findAllList() {
    return this.ItemCategoryModel.find();
  }

  findOne(getItemCategoryDto: GetItemCategoryDto) {
    return this.ItemCategoryModel.findOne(getItemCategoryDto);
  }

  findSingle(id: string) {
    return this.ItemCategoryModel.findOne({ _id: id });
  }

  update(id: string, updateItemCategoryDto: UpdateItemCategoryDto) {
    return this.ItemCategoryModel.updateOne({ _id: id }, updateItemCategoryDto);
  }

  remove(id: string) {
    return this.ItemCategoryModel.deleteOne({ _id: id });
  }

  updateOne(UpdateStatusCategoryDto: UpdateStatusCategoryDto) {
    console.log({ _id: UpdateStatusCategoryDto.id })
    return this.ItemCategoryModel.updateOne({ _id: UpdateStatusCategoryDto.id }, { status: UpdateStatusCategoryDto.status });
  }

}
