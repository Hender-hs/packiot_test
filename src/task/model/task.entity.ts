import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import CTask = Controller.Task;

@Entity()
export class Task implements Model.Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  description: string;  

  @Column({ default: new Date().toISOString() })
  createdAt: string;  

  @Column({ default: new Date().toISOString() })
  updatedAt: string;  

  @Column({ default: null })
  finishedAt: string;  

  constructor(Task: Model.Task | CTask.ReqBodyPost | CTask.ReqBodyPatch) {
	Task?.title && (this.title = Task.title);
	Task?.description && (this.description = Task.description);
  }
}
