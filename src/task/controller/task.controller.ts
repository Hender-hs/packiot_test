import { Controller, Delete, Get, Post, Param, Body, Query, Put } from "@nestjs/common";
import { Task } from "@TaskModel/task.entity";
import { TaskService } from "@TaskService/task.service";
import { CreateTaskDto, UpdateTaskDto } from "src/validator/task.dto";


@Controller("tasks")
export class TaskController {

  constructor(
	private readonly TaskService: TaskService,
  ) {}

  @Get("")
  async getTasks(): Promise<Task[]> {
	const allTasks = await this.TaskService.findAll();
	return allTasks;
  }

  @Get(":id")
  async getTask(@Param("id") id: string): Promise<Task> {
	const Task = await this.TaskService.findOne(parseInt(id));
	return Task;
  }

  @Get()
  async searchTask(@Query("search") search: string): Promise<Task[]> {
	const Task = await this.TaskService.findAll(search);
	return Task;
  }


  @Post("")
  async createTask(@Body() body: CreateTaskDto): Promise<Task> {
	const createdTask = await this.TaskService.create(body);
	return {...createdTask };
  }

  @Put(":id")
  async updateTask(@Param("id") id: string,
			   @Body() body: UpdateTaskDto): Promise<Task> {
	const updatedTask = await this.TaskService.update(Number(id), body);
	return { ...updatedTask };
  }

  @Delete(":id")
  async deleteTask(@Param("id") id: string): Promise<{ success: boolean }> {
	const wasTaskRowAffected = await this.TaskService.delete(parseInt(id));
	return { success: Boolean(wasTaskRowAffected) };
  }
}
