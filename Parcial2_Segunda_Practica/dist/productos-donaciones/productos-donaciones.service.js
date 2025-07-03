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
exports.ProductosDonacionesService = void 0;
const common_1 = require("@nestjs/common");
const productos_donacione_entity_1 = require("./entities/productos-donacione.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ProductosDonacionesService = class ProductosDonacionesService {
    productosDonacionesRepository;
    constructor(productosDonacionesRepository) {
        this.productosDonacionesRepository = productosDonacionesRepository;
    }
    create(createProductosDonacionesInput) {
        const productoDonacion = this.productosDonacionesRepository.create(createProductosDonacionesInput);
        return this.productosDonacionesRepository.save(productoDonacion);
    }
    findAll() {
        return this.productosDonacionesRepository.find();
    }
    findOne(id) {
        return this.productosDonacionesRepository.findOne({ where: { id } });
    }
    update(id, UpdateProductosDonacionesInput) {
        return this.productosDonacionesRepository.update(id, UpdateProductosDonacionesInput);
    }
    remove(id) {
        return this.productosDonacionesRepository.delete(id);
    }
};
exports.ProductosDonacionesService = ProductosDonacionesService;
exports.ProductosDonacionesService = ProductosDonacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(productos_donacione_entity_1.ProductosDonaciones)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductosDonacionesService);
//# sourceMappingURL=productos-donaciones.service.js.map