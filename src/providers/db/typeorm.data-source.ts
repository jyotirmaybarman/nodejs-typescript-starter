import "reflect-metadata";
import { env } from "../../utils/env";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: env.DB_TYPE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_DATABASE,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  entities: env.NODE_ENV === 'development' ? ['src/**/*.entity.ts'] : ['dist/**/*.entity.js'],
  migrations: ["dist/**/migrations/*.js"],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
