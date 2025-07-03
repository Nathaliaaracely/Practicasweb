"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosDonacionesModule = void 0;
const common_1 = require("@nestjs/common");
const productos_donaciones_service_1 = require("./productos-donaciones.service");
const productos_donaciones_resolver_1 = require("./productos-donaciones.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const productos_donacione_entity_1 = require("./entities/productos-donacione.entity");
let ProductosDonacionesModule = class ProductosDonacionesModule {
};
exports.ProductosDonacionesModule = ProductosDonacionesModule;
exports.ProductosDonacionesModule = ProductosDonacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([productos_donacione_entity_1.ProductosDonaciones])],
        providers: [productos_donaciones_resolver_1.ProductosDonacionesResolver, productos_donaciones_service_1.ProductosDonacionesService],
    })
], ProductosDonacionesModule);
//# sourceMappingURL=productos-donaciones.module.js.map