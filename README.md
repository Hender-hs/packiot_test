# Introduction

This API was created with NestJS using TypeScript and TypeORM. Was used SOLID principles and Design Patterns. 
You can set up any SQL Database you want. It has Authentication in all endpoints.

```http
GET /tasks
```

##### Task Routes  

#### API Routes  

<font size="7"> All routes are protected. It requires the access token in the authorization header </font>  
  
```http
GET /tasks  
```
```http
GET /tasks/:id  
```
```http
GET /tasks  
```
```http
POST /tasks  
```
```http
PUT /tasks/:id  
```
```http
DELETE /tasks/:id  
```  


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
