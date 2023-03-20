import { Module, ModuleMetadata } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskController } from "@TaskController/task.controller";
import { Task } from "@TaskModel/task.entity";
import { TaskService } from "@TaskService/task.service";

const moduleMetaData: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([Task])],
  exports: [TypeOrmModule], 
  controllers: [TaskController],
  providers: [TaskService]
};

@Module(moduleMetaData)
export class TaskModule {}

