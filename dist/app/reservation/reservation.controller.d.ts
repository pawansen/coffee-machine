import { I18nContext } from 'nestjs-i18n';
import { ReservationService } from './reservation.service';
import { CreateReservationOrderDto } from './dto/create-reservation.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationOrderDto: CreateReservationOrderDto, response: any, i18n: I18nContext): any;
    findAll(response: any, i18n: I18nContext, filter: {
        pageNo: number;
        size: number;
        date: string;
    }): void;
    findOne(id: string, response: any, i18n: I18nContext): void;
}
