# Introduction

This API was created with NestJS using TypeScript and TypeORM. Was used SOLID principles and Design Patterns. 
You can set up any SQL Database you want. It has Authentication in all endpoints.

```http
GET /tasks
```

| Endipoint | Method | Description |

| `/tasks` | `GET`    | **Required**. Authentication |

| `/tasks/:id` | `GET`     | **Required**. Authentication |

| `/tasks` | `POST`    | **Required**. Authentication |

| `/tasks/:id` | `PUT`     | **Required**. Authentication |

| `/tasks/:id` | `DELETE`  | **Required**. Authentication |





## Responses

```javascript
{
  "id" : string,
  "title"    : string,
  "description" : string,
  "createdAt" : date,
  "updatedAt" : date,
  "finishedAt" : date,
}
```

The `id` the task identifier;

The `title` the task title;

The `description` the task decription;

The `createdAt` the task creation date;

The `updatedAt` the task last update;

The `finishedAt` the task finish date;

## Status Codes

The API can return only the following codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


