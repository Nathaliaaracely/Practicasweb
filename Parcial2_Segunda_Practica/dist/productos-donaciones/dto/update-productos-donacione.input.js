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
exports.UpdateProductosDonacionesInput = void 0;
const class_validator_1 = require("class-validator");
const create_productos_donacione_input_1 = require("./create-productos-donacione.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateProductosDonacionesInput = class UpdateProductosDonacionesInput extends (0, graphql_1.PartialType)(create_productos_donacione_input_1.CreateProductosDonacionesInput) {
    id;
};
exports.UpdateProductosDonacionesInput = UpdateProductosDonacionesInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateProductosDonacionesInput.prototype, "id", void 0);
exports.UpdateProductosDonacionesInput = UpdateProductosDonacionesInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductosDonacionesInput);
//# sourceMappingURL=update-productos-donacione.input.js.map