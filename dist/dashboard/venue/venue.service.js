"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const hash_1 = require("../../helper/hash");
const helper_1 = require("../../helper/helper");
const ObjectId = mongoose_1.Types.ObjectId;
let VenueService = class VenueService {
    constructor(VenueModel, MenuModel, UserModel, hashService, helperService) {
        this.VenueModel = VenueModel;
        this.MenuModel = MenuModel;
        this.UserModel = UserModel;
        this.hashService = hashService;
        this.helperService = helperService;
    }
    addVenue(createVenueDto, file) {
        createVenueDto.floorPlanImage = file;
        return this.hashService.hashPassword(createVenueDto.password).then((password) => {
            createVenueDto.password = password;
            let payload = {
                firstName: createVenueDto.name,
                email: createVenueDto.email,
                password: password,
                location: createVenueDto.location,
                description: createVenueDto.description,
                profileImage: createVenueDto.floorPlanImage,
                role: "Venue"
            };
            const user = new this.UserModel(payload);
            user.save().then((insert) => {
                createVenueDto.userid = insert._id;
                const venue = new this.VenueModel(createVenueDto);
                venue.save();
            });
        });
    }
    updateVenue(UpdateVenueDto, file) {
        if (file !== "") {
            UpdateVenueDto.floorPlanImage = file;
        }
        return this.hashService.hashPassword(UpdateVenueDto.password).then((password) => {
            UpdateVenueDto.password = password;
            console.log(UpdateVenueDto);
            this.VenueModel.updateOne({ _id: new mongoose_1.Types.ObjectId(UpdateVenueDto.id) }, UpdateVenueDto);
        });
    }
    findAllVenue() {
        return this.VenueModel.aggregate([
            {
                $lookup: {
                    from: 'users',
                    let: { "uId": "$userid" },
                    pipeline: [
                        {
                            "$match": {
                                "$expr": {
                                    "$and": [
                                        { "$eq": ["$_id", "$$uId"] },
                                    ]
                                }
                            }
                        }, { "$project": { _id: 0, status: 1, role: 1 } },
                    ],
                    "as": "userInfo"
                },
            },
            {
                $project: { userid: 1, _id: 1, venueId: "$_id", name: 1, description: 1, location: 1, createDate: 1, floorPlanImage: 1, email: 1, roleStatus: { $arrayElemAt: ["$userInfo", 0] }, status: 1 }
            }
        ]);
    }
    findVenue(id) {
        return this.VenueModel.aggregate([
            { $match: { _id: new ObjectId(id) } },
            {
                $lookup: {
                    from: 'users',
                    let: { "uId": "$userid" },
                    pipeline: [
                        {
                            "$match": {
                                "$expr": {
                                    "$and": [
                                        { "$eq": ["$_id", "$$uId"] },
                                    ]
                                }
                            }
                        }, { "$project": { _id: 0, status: 1, role: 1 } },
                    ],
                    "as": "userInfo"
                },
            },
            {
                $project: { userid: 1, _id: 1, venueId: "$_id", name: 1, description: 1, location: 1, createDate: 1, floorPlanImage: 1, email: 1, roleStatus: { $arrayElemAt: ["$userInfo", 0] }, status: 1 }
            }
        ]);
    }
    findOneVanue(id) {
        return this.VenueModel.findOne({ _id: id });
    }
    findOneUser(createVenueDto) {
        return this.UserModel.findOne({ email: createVenueDto.email });
    }
    toCheckEmail(UpdateVenueDto) {
        console.log(UpdateVenueDto);
        return this.UserModel.findOne({ email: UpdateVenueDto.email, _id: { $ne: new mongoose_1.Types.ObjectId(UpdateVenueDto.id) } });
    }
    findOneVenue(createVenueDto) {
        return this.VenueModel.findOne({ email: createVenueDto.email });
    }
    addMenu(createMenuDto) {
        const max = 999999;
        createMenuDto.code = Math.floor(Math.random() * max);
        const category = new this.MenuModel(createMenuDto);
        return category.save();
    }
    findAll(filterMenu) {
        let skip = this.helperService.getOffset(Number(filterMenu.pageNo), Number(filterMenu.size));
        if (filterMenu.categoryId !== undefined && filterMenu.categoryId !== "") {
            console.log({ categoryId: filterMenu.categoryId });
            return this.MenuModel.find({ categoryId: filterMenu.categoryId }).skip(skip).limit(filterMenu.size);
        }
        else {
            return this.MenuModel.find().skip(skip).limit(filterMenu.size);
        }
    }
    findOne(id) {
        return this.MenuModel.findOne({ _id: id });
    }
    update(id, updateMenuDto) {
        return this.MenuModel.updateOne({ _id: id }, updateMenuDto);
    }
    updateOne(id, updateMenuDto) {
        return this.VenueModel.updateOne({ _id: new mongoose_1.Types.ObjectId(id) }, updateMenuDto);
    }
    remove(id) {
        return this.MenuModel.deleteOne({ _id: id });
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('venue')),
    __param(1, (0, mongoose_2.InjectModel)('menu')),
    __param(2, (0, mongoose_2.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        hash_1.HashService,
        helper_1.HelperService])
], VenueService);
//# sourceMappingURL=venue.service.js.map