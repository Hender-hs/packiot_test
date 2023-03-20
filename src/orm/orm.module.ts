import { ModuleMetadata } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "@TaskModel/task.entity";
import { TaskModule } from "@TaskModule/task.module";
import * as dotenv from "dotenv"; 

dotenv.config();

const typeOrmOptions: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Task],
  migrations: ["@/migrations"],
  synchronize: true
};

const mysqlDbModule = TypeOrmModule.forRoot(typeOrmOptions)

const moduleMetadata: ModuleMetadata = {
  imports: [mysqlDbModule, TaskModule],
}

@Module(moduleMetadata)
export class ORMModule {}

