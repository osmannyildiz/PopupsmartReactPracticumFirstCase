import CreateTodoResponse from "../models/responses/CreateTodoResponse";
import DeleteTodoResponse from "../models/responses/DeleteTodoResponse";
import GetTodosResponse from "../models/responses/GetTodosResponse";
import UpdateTodoResponse from "../models/responses/UpdateTodoResponse";
import Todo from "../models/Todo";
import HttpClient from "../utils/HttpClient";

export default class TodoService {
	static endpoint = "https://6322e905a624bced30817a1c.mockapi.io/todos";

	static async getAll(): Promise<GetTodosResponse> {
		return await HttpClient.get(this.endpoint);
	}

	static async create(todo: Todo): Promise<CreateTodoResponse> {
		return await HttpClient.post(this.endpoint, todo);
	}

	static async update(todo: Todo): Promise<UpdateTodoResponse> {
		return await HttpClient.put(`${this.endpoint}/${todo.id}`, todo);
	}

	static async delete(todo: Todo): Promise<DeleteTodoResponse> {
		return await HttpClient.delete(`${this.endpoint}/${todo.id}`);
	}
}
