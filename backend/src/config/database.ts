import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASS,
  database: process.env.PGDB,
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});
