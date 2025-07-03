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
exports.DonacionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donacione_entity_1 = require("./entities/donacione.entity");
let DonacionesService = class DonacionesService {
    donacionesRepository;
    constructor(donacionesRepository) {
        this.donacionesRepository = donacionesRepository;
    }
    create(createDonacionesInput) {
        const donacion = this.donacionesRepository.create(createDonacionesInput);
        return this.donacionesRepository.save(donacion);
    }
    findAll() {
        return this.donacionesRepository.find();
    }
    findOne(id) {
        return this.donacionesRepository.findOne({ where: { id } });
    }
    update(id, updateDonacioneInput) {
        return this.donacionesRepository.update(id, updateDonacioneInput);
    }
    remove(id) {
        return this.donacionesRepository.delete(id);
    }
};
exports.DonacionesService = DonacionesService;
exports.DonacionesService = DonacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donacione_entity_1.Donaciones)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DonacionesService);
//# sourceMappingURL=donaciones.service.js.map