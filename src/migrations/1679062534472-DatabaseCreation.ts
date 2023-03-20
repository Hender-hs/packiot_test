import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableOptions } from "typeorm"

export class DatabaseCreation1679062534472 implements MigrationInterface {

	private generateTaskTable() {
	  const taskTableConfig: TableOptions = {
		name: "task",
		columns: [
		  {
			name: "id",
			type: "int",
			isPrimary: true
		  },
		  {
			name: "title",
			type: "varchar",
		  },
		  {
			name: "description",
			type: "varchar",
		  },
		  {
			name: "createdAt",
			type: "datetime",
		  },
		  {
			name: "updatedAt",
			type: "datetime",
		  },
		  {
			name: "finishedAt",
			type: "datetime",
		  }
		]
	  }
	  return new Table(taskTableConfig);
	}

	private generateContactTable() {
	  const contactTableConfig: TableOptions = {
		name: "contact",
		columns: [
		  {
			name: "id",
			type: "int",
			isPrimary: true
		  },
		  {
			name: "type",
			type: "varchr",
		  },
		  {
			name: "description",
			type: "varchar",
		  },
		  {
			name: "personId",
			type: "int"
		  }
		]
	  }
	  return new Table(contactTableConfig);
	}

    public async up(queryRunner: QueryRunner): Promise<void> {
	  const taskTable = this.generateTaskTable();	
	  await queryRunner.createTable(taskTable, true); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
	  await queryRunner.dropTable("task");
    }
}
