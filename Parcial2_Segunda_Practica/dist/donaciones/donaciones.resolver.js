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
exports.DonacionesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const donaciones_service_1 = require("./donaciones.service");
const donacione_entity_1 = require("./entities/donacione.entity");
const create_donacione_input_1 = require("./dto/create-donacione.input");
const update_donacione_input_1 = require("./dto/update-donacione.input");
let DonacionesResolver = class DonacionesResolver {
    donacionesService;
    constructor(donacionesService) {
        this.donacionesService = donacionesService;
    }
    createDonacione(createDonacioneInput) {
        return this.donacionesService.create(createDonacioneInput);
    }
    findAll() {
        return this.donacionesService.findAll();
    }
    findOne(id) {
        return this.donacionesService.findOne(id);
    }
    updateDonacione(updateDonacioneInput) {
        return this.donacionesService.update(updateDonacioneInput.id, updateDonacioneInput);
    }
    removeDonacione(id) {
        return this.donacionesService.remove(id);
    }
};
exports.DonacionesResolver = DonacionesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => donacione_entity_1.Donaciones),
    __param(0, (0, graphql_1.Args)('createDonacioneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_donacione_input_1.CreateDonacioneInput]),
    __metadata("design:returntype", void 0)
], DonacionesResolver.prototype, "createDonacione", null);
__decorate([
    (0, graphql_1.Query)(() => [donacione_entity_1.Donaciones], { name: 'donaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonacionesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => donacione_entity_1.Donaciones, { name: 'donacione' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonacionesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => donacione_entity_1.Donaciones),
    __param(0, (0, graphql_1.Args)('updateDonacioneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_donacione_input_1.UpdateDonacioneInput]),
    __metadata("design:returntype", void 0)
], DonacionesResolver.prototype, "updateDonacione", null);
__decorate([
    (0, graphql_1.Mutation)(() => donacione_entity_1.Donaciones),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonacionesResolver.prototype, "removeDonacione", null);
exports.DonacionesResolver = DonacionesResolver = __decorate([
    (0, graphql_1.Resolver)(() => donacione_entity_1.Donaciones),
    __metadata("design:paramtypes", [donaciones_service_1.DonacionesService])
], DonacionesResolver);
//# sourceMappingURL=donaciones.resolver.js.map