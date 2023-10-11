import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVenueDto, CreateMenuDto, GetMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto, UpdateStatusDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from 'src/schema/menu.schema';
import { HashService } from '../../helper/hash'
import { HelperService } from '../../helper/helper'

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('menu') private MenuModel: Model<MenuDocument>,
    private hashService: HashService,
    private helperService: HelperService
  ) { }


  addMenu(createMenuDto: CreateMenuDto) {
    const max: number = 999999;
    createMenuDto.code = Math.floor(Math.random() * max);
    const category = new this.MenuModel(createMenuDto);
    return category.save();
  }

  findAll(filterMenu: { pageNo: number, size: number, categoryId: string }) {
    let skip = this.helperService.getOffset(Number(filterMenu.pageNo), Number(filterMenu.size));
    if (filterMenu.categoryId !== undefined && filterMenu.categoryId !== "") {
      return this.MenuModel.find({ categoryId: filterMenu.categoryId });
      //return this.MenuModel.find({ categoryId: filterMenu.categoryId }).skip(skip).limit(filterMenu.size);
    } else {
      return this.MenuModel.find();
      //return this.MenuModel.find().skip(skip).limit(filterMenu.size);
    }
  }

  findOne(id: string) {
    return this.MenuModel.findOne({ _id: id });
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.MenuModel.updateOne({ _id: id }, updateMenuDto);
  }

  remove(id: string) {
    return this.MenuModel.deleteOne({ _id: id });
  }

  updateOne(UpdateStatusDto: UpdateStatusDto) {
    return this.MenuModel.updateOne({ _id: UpdateStatusDto.id }, { status: UpdateStatusDto.status });
  }

}
