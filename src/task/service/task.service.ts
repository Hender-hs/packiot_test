  import { Injectable } from "@nestjs/common";
  import { InjectRepository } from "@nestjs/typeorm";
  import { Task } from "@TaskModel/task.entity";
  import { FindOneOptions, FindOptionsWhere, Like, Repository } from "typeorm";

  import CTask = Controller.Task;
  type CreatePostBodyReq = CTask.ReqBodyPost;
  type UpdatePatchBodyReq = CTask.ReqBodyPatch;

  @Injectable()
  export class TaskService {
	
	constructor(
	  @InjectRepository(Task)
	  private TaskRepositoryModel: Repository<Task>,
	) {}
	
	async findAll(search?: string): Promise<Task[]> {
	  const options: FindOneOptions<Task> = {
		where: {
		  ...(search && { title: Like(`%${search}%`) })
		},
	  };
	  return await this.TaskRepositoryModel.find(options);
	}

	async findOne(id: number): Promise<Task> { 
	  const options: FindOneOptions<Task> = {
		where: { id },
	  };
	  return await this.TaskRepositoryModel.findOne(options);
	}

	async create(body: CreatePostBodyReq): Promise<Task> { 
	  const task = new Task(body);
	  return await this.TaskRepositoryModel.save(task);
	}

	async update(id: number, body: UpdatePatchBodyReq): Promise<Task> {
	  const task = new Task({ id, ...body}); 
	  return await this.TaskRepositoryModel.save(task);
	}

	async delete(id: number): Promise<number | null> {
	  const options: FindOptionsWhere<Task> = {
		id
	  };
	  return (await this.TaskRepositoryModel.delete(options))?.affected;
  }
}

