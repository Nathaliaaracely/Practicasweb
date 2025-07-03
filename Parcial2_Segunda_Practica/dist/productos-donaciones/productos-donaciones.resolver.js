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
exports.ProductosDonacionesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const productos_donaciones_service_1 = require("./productos-donaciones.service");
const productos_donacione_entity_1 = require("./entities/productos-donacione.entity");
const create_productos_donacione_input_1 = require("./dto/create-productos-donacione.input");
const update_productos_donacione_input_1 = require("./dto/update-productos-donacione.input");
let ProductosDonacionesResolver = class ProductosDonacionesResolver {
    productosDonacionesService;
    constructor(productosDonacionesService) {
        this.productosDonacionesService = productosDonacionesService;
    }
    createProductosDonacione(createProductosDonacioneInput) {
        return this.productosDonacionesService.create(createProductosDonacioneInput);
    }
    findAll() {
        return this.productosDonacionesService.findAll();
    }
    findOne(id) {
        return this.productosDonacionesService.findOne(id);
    }
    updateProductosDonacione(updateProductosDonacioneInput) {
        return this.productosDonacionesService.update(updateProductosDonacioneInput.id, updateProductosDonacioneInput);
    }
    removeProductosDonacione(id) {
        return this.productosDonacionesService.remove(id);
    }
};
exports.ProductosDonacionesResolver = ProductosDonacionesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => productos_donacione_entity_1.ProductosDonaciones),
    __param(0, (0, graphql_1.Args)('createProductosDonacioneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_productos_donacione_input_1.CreateProductosDonacionesInput]),
    __metadata("design:returntype", void 0)
], ProductosDonacionesResolver.prototype, "createProductosDonacione", null);
__decorate([
    (0, graphql_1.Query)(() => [productos_donacione_entity_1.ProductosDonaciones], { name: 'productosDonaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductosDonacionesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => productos_donacione_entity_1.ProductosDonaciones, { name: 'productosDonacione' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductosDonacionesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => productos_donacione_entity_1.ProductosDonaciones),
    __param(0, (0, graphql_1.Args)('updateProductosDonacioneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_productos_donacione_input_1.UpdateProductosDonacionesInput]),
    __metadata("design:returntype", void 0)
], ProductosDonacionesResolver.prototype, "updateProductosDonacione", null);
__decorate([
    (0, graphql_1.Mutation)(() => productos_donacione_entity_1.ProductosDonaciones),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductosDonacionesResolver.prototype, "removeProductosDonacione", null);
exports.ProductosDonacionesResolver = ProductosDonacionesResolver = __decorate([
    (0, graphql_1.Resolver)(() => productos_donacione_entity_1.ProductosDonaciones),
    __metadata("design:paramtypes", [productos_donaciones_service_1.ProductosDonacionesService])
], ProductosDonacionesResolver);
//# sourceMappingURL=productos-donaciones.resolver.js.map