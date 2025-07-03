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
exports.CreateTranssacionesPagoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateTranssacionesPagoInput = class CreateTranssacionesPagoInput {
    status;
    transactionDate;
    amount;
    userId;
};
exports.CreateTranssacionesPagoInput = CreateTranssacionesPagoInput;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { description: 'Status of the transaction' }),
    __metadata("design:type", String)
], CreateTranssacionesPagoInput.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { description: 'Date when the transaction was made' }),
    __metadata("design:type", String)
], CreateTranssacionesPagoInput.prototype, "transactionDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Amount of the transaction' }),
    __metadata("design:type", Number)
], CreateTranssacionesPagoInput.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { description: 'ID of the user making the transaction' }),
    __metadata("design:type", String)
], CreateTranssacionesPagoInput.prototype, "userId", void 0);
exports.CreateTranssacionesPagoInput = CreateTranssacionesPagoInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTranssacionesPagoInput);
//# sourceMappingURL=create-transsaciones-pago.input.js.map