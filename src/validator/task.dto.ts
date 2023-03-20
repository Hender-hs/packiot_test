import { IsDate, IsDateString, IsNumber, IsString, IsOptional, ValidateIf } from 'class-validator';

import CTask = Controller.Task;

type CreateTaskBodyRequest = CTask.ReqBodyPost;
type UpdateTaskBodyRequest = CTask.ReqBodyPatch;

export class CreateTaskDto implements CreateTaskBodyRequest {
  @IsString()
  title: string;

  @IsString()
  description: string;  
}


export class UpdateTaskDto implements UpdateTaskBodyRequest {
  @IsOptional()
  @IsString()
  title?: string;
  
  @IsOptional()
  @IsString()
  description?: string;  
}


