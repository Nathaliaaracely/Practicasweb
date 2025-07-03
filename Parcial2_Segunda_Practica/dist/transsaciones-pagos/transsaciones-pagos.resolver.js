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
exports.TranssacionesPagosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const transsaciones_pagos_service_1 = require("./transsaciones-pagos.service");
const transsaciones_pago_entity_1 = require("./entities/transsaciones-pago.entity");
const create_transsaciones_pago_input_1 = require("./dto/create-transsaciones-pago.input");
const update_transsaciones_pago_input_1 = require("./dto/update-transsaciones-pago.input");
let TranssacionesPagosResolver = class TranssacionesPagosResolver {
    transsacionesPagosService;
    constructor(transsacionesPagosService) {
        this.transsacionesPagosService = transsacionesPagosService;
    }
    createTranssacionesPago(createTranssacionesPagoInput) {
        return this.transsacionesPagosService.create(createTranssacionesPagoInput);
    }
    findAll() {
        return this.transsacionesPagosService.findAll();
    }
    findOne(id) {
        return this.transsacionesPagosService.findOne(id);
    }
    updateTranssacionesPago(updateTranssacionesPagoInput) {
        return this.transsacionesPagosService.update(updateTranssacionesPagoInput.id, updateTranssacionesPagoInput);
    }
    removeTranssacionesPago(id) {
        return this.transsacionesPagosService.remove(id);
    }
};
exports.TranssacionesPagosResolver = TranssacionesPagosResolver;
__decorate([
    (0, graphql_1.Mutation)(() => transsaciones_pago_entity_1.TranssacionesPago),
    __param(0, (0, graphql_1.Args)('createTranssacionesPagoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transsaciones_pago_input_1.CreateTranssacionesPagoInput]),
    __metadata("design:returntype", void 0)
], TranssacionesPagosResolver.prototype, "createTranssacionesPago", null);
__decorate([
    (0, graphql_1.Query)(() => [transsaciones_pago_entity_1.TranssacionesPago], { name: 'transsacionesPagos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TranssacionesPagosResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => transsaciones_pago_entity_1.TranssacionesPago, { name: 'transsacionesPago' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TranssacionesPagosResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => transsaciones_pago_entity_1.TranssacionesPago),
    __param(0, (0, graphql_1.Args)('updateTranssacionesPagoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_transsaciones_pago_input_1.UpdateTranssacionesPagoInput]),
    __metadata("design:returntype", void 0)
], TranssacionesPagosResolver.prototype, "updateTranssacionesPago", null);
__decorate([
    (0, graphql_1.Mutation)(() => transsaciones_pago_entity_1.TranssacionesPago),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TranssacionesPagosResolver.prototype, "removeTranssacionesPago", null);
exports.TranssacionesPagosResolver = TranssacionesPagosResolver = __decorate([
    (0, graphql_1.Resolver)(() => transsaciones_pago_entity_1.TranssacionesPago),
    __metadata("design:paramtypes", [transsaciones_pagos_service_1.TranssacionesPagosService])
], TranssacionesPagosResolver);
//# sourceMappingURL=transsaciones-pagos.resolver.js.map