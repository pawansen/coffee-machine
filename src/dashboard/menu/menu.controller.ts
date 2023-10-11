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
  UseInterceptors,
  UploadedFile,
  Query
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
const csvtojson = require('csvtojson');
import { MenuService } from './menu.service';
import { ItemCategoryService } from '../item-category/item-category.service';
import { CreateVenueDto, CreateMenuDto, GetMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto, UpdateStatusDto } from './dto/update-menu.dto';
import { ConfigService } from "@nestjs/config";

@Controller('admin/menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly itemCategoryService: ItemCategoryService,
    private configService: ConfigService
  ) { }

  /**
   *  add menu
   *  @post
   *  @object
   *
   */
  @Post('add-menu')
  addMenu(
    @Res() response,
    @Body() CreateMenuDto: CreateMenuDto,
    @I18n() i18n: I18nContext,
  ) {
    try {
      this.menuService.addMenu(CreateMenuDto).then((data) => {
        return response.status(HttpStatus.CREATED).json({
          statusCode: 200,
          message: i18n.t('events.menu.add'),
          data,
        });
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.menu.error'),
        error: i18n.t('events.bad_Request'),
      });
    }
  }

  /**
   *  upload csv to add menu
   *  @post
   *  @object
   *
   */
  @Post('upload-menu')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/excel',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadMenu(
    @Res() response,
    @UploadedFile() file: Express.Multer.File,
    @I18n() i18n: I18nContext,
  ) {
    try {
      this.itemCategoryService.findAllList().then((category) => {
        const newObj: any = {};
        category.forEach((item: any) => {
          newObj[item._id] = item.name;
        });

        const filePath: string = file.path;
        csvtojson()
          .fromFile(filePath)
          .then((source: any) => {
            let obj = [];
            for (const row of source) {
              const payload: any = {
                name: row.Name,
                description: row.Description,
                price: row.Price,
                discount: 0,
                venueId: '650147c72190733aba659f26',
                categoryId: Object.keys(newObj).find(
                  (key) => newObj[key] === row.Category,
                ),
              };
              obj.push(payload)
              this.menuService.addMenu(payload).then((data) => {
                console.log(data);
              });

            }

            return response.status(HttpStatus.CREATED).json({
              statusCode: 200,
              message: i18n.t('events.menu.add'),
              obj
            });

          });


      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.menu.error'),
        error: i18n.t('events.bad_Request'),
      });
    }
  }

  /**
  *  get menu
  *  @post
  *  @object
  *
  */
  @Get('get-menu')
  GetMenu(@Res() response,
    @I18n() i18n: I18nContext,
    @Query() filterMenu: { pageNo: number, size: number, categoryId: string }) {
    this.menuService.findAll(filterMenu).then((data) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.menu.error'),
        error: err,
      });
    })
  }

  /**
  *  get menu details
  *  @post
  *  @object
  *
  */
  @Get('get-menu/:id')
  GetMenuDetails(@Param('id') id: string,
    @Res() response,
    @I18n() i18n: I18nContext,
    @Query() filterMenu: { pageNo: number, size: number }) {
    this.menuService.findOne(id).then((data) => {
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: i18n.t('events.list'),
        data,
      });
    }).catch((err) => {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.menu.error'),
        error: err,
      });
    })
  }


  /**
*  delete menu
*  @post
*  @object
*
*/
  @Put('status/update')
  updateStatus(@Body() UpdateStatusDto: UpdateStatusDto,
    @Res() response,
    @I18n() i18n: I18nContext) {

    const estatus: Array<number> = [0, 1]
    if (typeof estatus[UpdateStatusDto.status] !== "undefined") {
      this.menuService.updateOne(UpdateStatusDto).then((data) => {
        return response.status(HttpStatus.OK).json({
          statusCode: 200,
          message: i18n.t('events.menu.delete'),
          data,
        });
      }).catch((err) => {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: i18n.t('events.menu.error'),
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

  /**
  *  update menu
  *  @post
  *  @object
  *
  */
  @Put('update-menu/:id')
  update(@Param('id') id: string,
    @Res() response,
    @Body() updateMenuDto: UpdateMenuDto,
    @I18n() i18n: I18nContext) {
    try {
      this.menuService
        .update(id, updateMenuDto)
        .then((data) => {
          return response.status(HttpStatus.OK).json({
            statusCode: 200,
            message: i18n.t('events.menu.update'),
            data,
          });
        })
        .catch((err) => {
          return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: i18n.t('events.menu.error'),
            error: err,
          });
        });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: i18n.t('events.menu.error'),
        error: i18n.t('events.bad_Request'),
      });
    }
  }


}
