import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
  Query
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ItemCategoryService } from './item-category.service';
import { CreateItemCategoryDto } from './dto/create-item-category.dto';
import { UpdateItemCategoryDto, UpdateStatusCategoryDto } from './dto/update-item-category.dto';
import { GetItemCategoryDto } from './dto/get-item-category.dto';

@Controller('admin/item-category')
export class ItemCategoryController {
  constructor(private readonly itemCategoryService: ItemCategoryService) { }

  @Post()
  create(
    @Res() response,
    @Body() createItemCategoryDto: CreateItemCategoryDto,
    @I18n() i18n: I18nContext,
  ) {
    try {
      this.itemCategoryService
        .findOneByName(createItemCategoryDto)
        .then((catgory) => {
          if (!catgory) {
            this.itemCategoryService
              .create(createItemCategoryDto)
              .then((data) => {
                return response.status(HttpStatus.CREATED).json({
                  statusCode: 200,
                  message: i18n.t('events.category.add'),
                  data,
                });
              })
              .catch((err) => {
                return response.status(HttpStatus.BAD_REQUEST).json({
                  statusCode: 400,
                  message: i18n.t('events.category.error'),
                  error: err,
                });
              });
          } else {
            return response.status(HttpStatus.BAD_REQUEST).json({
              statusCode: 400,
              message: i18n.t('events.category.error'),
              error: i18n.t('events.bad_Request'),
            });
          }
        });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.category.error'),
        error: i18n.t('events.bad_Request'),
      });
    }
  }

  @Get()
  findAll(@Res() response,
    @I18n() i18n: I18nContext,
    @Query() filter: { pageNo: number, size: number }) {
    this.itemCategoryService.findAll(filter).then((data) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.category.error'),
        error: err,
      });
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response,
    @I18n() i18n: I18nContext) {
    this.itemCategoryService.findSingle(id).then((data) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.category.error'),
        error: err,
      });
    })
  }

  @Put(':id')
  update(@Param('id') id: string,
    @Res() response,
    @Body() updateItemCategoryDto: UpdateItemCategoryDto,
    @I18n() i18n: I18nContext) {
    try {
      let payloadItemCategoryDto: GetItemCategoryDto = {
        _id: { $ne: id as string },
        name: updateItemCategoryDto.name
      }
      this.itemCategoryService
        .findOne(payloadItemCategoryDto)
        .then((catgory) => {
          if (!catgory) {
            this.itemCategoryService
              .update(id, updateItemCategoryDto)
              .then((data) => {
                return response.status(HttpStatus.OK).json({
                  statusCode: 200,
                  message: i18n.t('events.category.update'),
                  data,
                });
              })
              .catch((err) => {
                return response.status(HttpStatus.BAD_REQUEST).json({
                  statusCode: 400,
                  message: i18n.t('events.category.error'),
                  error: err,
                });
              });
          } else {
            return response.status(HttpStatus.BAD_REQUEST).json({
              statusCode: 400,
              message: i18n.t('events.category.error'),
              error: i18n.t('events.bad_Request'),
            });
          }
        });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.category.error'),
        error: i18n.t('events.bad_Request'),
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string,
    @Res() response,
    @I18n() i18n: I18nContext) {
    this.itemCategoryService.remove(id).then((data) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.category.delete'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.category.error'),
        error: err,
      });
    })
  }


  @Put('/status/update')
  updateStatus(@Body() UpdateStatusCategoryDto: UpdateStatusCategoryDto,
    @Res() response,
    @I18n() i18n: I18nContext) {
    const estatus: Array<number> = [0, 1]
    if (typeof estatus[UpdateStatusCategoryDto.status] !== "undefined") {
      this.itemCategoryService.updateOne(UpdateStatusCategoryDto).then((data) => {
        return response.status(HttpStatus.OK).json({
          statusCode: 200,
          message: i18n.t('events.category.delete'),
          data,
        });
      }).catch((err) => {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: i18n.t('events.category.error'),
          error: err,
        });
      })
    } else {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.error_status'),
        error: i18n.t('events.error_status'),
      });
    }
  }

}
