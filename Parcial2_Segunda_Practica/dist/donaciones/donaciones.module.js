"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonacionesModule = void 0;
const common_1 = require("@nestjs/common");
const donaciones_service_1 = require("./donaciones.service");
const donaciones_resolver_1 = require("./donaciones.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const donacione_entity_1 = require("./entities/donacione.entity");
let DonacionesModule = class DonacionesModule {
};
exports.DonacionesModule = DonacionesModule;
exports.DonacionesModule = DonacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([donacione_entity_1.Donaciones])],
        providers: [donaciones_resolver_1.DonacionesResolver, donaciones_service_1.DonacionesService],
    })
], DonacionesModule);
//# sourceMappingURL=donaciones.module.js.map