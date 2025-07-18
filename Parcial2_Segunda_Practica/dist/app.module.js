"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const donaciones_module_1 = require("./donaciones/donaciones.module");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const productos_donaciones_module_1 = require("./productos-donaciones/productos-donaciones.module");
const transsaciones_pagos_module_1 = require("./transsaciones-pagos/transsaciones-pagos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [donaciones_module_1.DonacionesModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                autoLoadEntities: true,
                synchronize: true,
            }),
            productos_donaciones_module_1.ProductosDonacionesModule,
            transsaciones_pagos_module_1.TranssacionesPagosModule,],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map