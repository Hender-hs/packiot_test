import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from 'src/task/controller/task.controller';
import { TaskService } from 'src/task/service/task.service';

describe('TaskController', () => {
  let taskController: TaskController;
  let firstTask: Model.Task;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    taskController = app.get<TaskController>(TaskController);
  });


  describe('creating tasks', () => {
	const payload = {
	  "id": 1,
	  "title": "task-title",
	  "description": "email@email.com",
	}

	const result = {
	  "id": 1,
	  "title": "task-title",
	  "description": "email@email.com",
	  "createdAt": new Date().toISOString(),
	  "updatedAt": new Date().toISOString(),
	  "finishedAt": null
	}

    it('should return a created task', () => {
      expect(taskController.createTask(payload)).toBe(result);
    });
  });


  describe('should return all tasks', () => {
    it('should return a created task', () => {
      expect(taskController.getTasks()).toBe(
	  [
		{
		  "id": 1,
		  "title": "task-title",
		  "description": "email@email.com",
		  "createdAt": new Date().toISOString(),
		  "updatedAt": new Date().toISOString(),
		  "finishedAt": null
		}
	  ]);
    });
  });


  describe('should return a specific task', () => {
    it('should return a created task', () => {
      expect(taskController.getTask("1")).toBe(firstTask);
    });
  });


  describe('should update a specific task', () => {
	const payload = {
	  "title": "Fernanes",
	  "description": "Fernanes@email.com"
	};
    it('should return a created task', () => {
      expect(taskController.updateTask("1", payload)).toBe({ ...firstTask, ...payload });
    });
  });


  describe('should delete a specific task', () => {
    it('should return a created task', () => {
      expect(taskController.deleteTask("1")).toBe({ success: true });
    });
  });
});
