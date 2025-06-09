import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'NAty172003',
  database: 'inventario_db',
  synchronize: true,
  logging: false,
  entities: ['src/domain/entities/**/*.ts'],
});
