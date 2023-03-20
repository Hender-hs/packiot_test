type ContactType = "email" | "tel";



declare namespace Controller {
  namespace Task {

	interface ReqBodyPost {
	  title: string;
	  description: string;
	}

	interface ReqBodyPatch {
	  title?: string;
	  description?: string;
	}
  }
}


declare namespace Model {

  interface Task {
	id: number;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	finishedAt: string;
  }
}
