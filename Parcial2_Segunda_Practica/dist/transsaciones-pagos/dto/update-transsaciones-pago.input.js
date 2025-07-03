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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTranssacionesPagoInput = void 0;
const create_transsaciones_pago_input_1 = require("./create-transsaciones-pago.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdateTranssacionesPagoInput = class UpdateTranssacionesPagoInput extends (0, graphql_1.PartialType)(create_transsaciones_pago_input_1.CreateTranssacionesPagoInput) {
    id;
};
exports.UpdateTranssacionesPagoInput = UpdateTranssacionesPagoInput;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UpdateTranssacionesPagoInput.prototype, "id", void 0);
exports.UpdateTranssacionesPagoInput = UpdateTranssacionesPagoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTranssacionesPagoInput);
//# sourceMappingURL=update-transsaciones-pago.input.js.map