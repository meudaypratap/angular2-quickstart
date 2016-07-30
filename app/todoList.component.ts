import { Component, OnInit } from '@angular/core';
import { Todo} from './Todo';
import { TodoService} from '../services/TodoService';

@Component({
    selector: 'todo-list',
    templateUrl: './templates/todos.html',
    providers: [TodoService]
})
export class TodoListComponent implements OnInit {
    selectedTodo: Todo;
    priorities: number[];
    constructor(private todoService: TodoService){}

    ngOnInit() {
        this.priorities = [1, 2, 3];
        this.selectedTodo = new Todo();
    }
    selectTodo(todo: Todo) {
        this.selectedTodo = todo;
    }
    addTodo() {
        this.todoService.todos.push(this.selectedTodo);
        this.selectedTodo = new Todo();
    }
    removeTodo(todo: Todo) {
        this.todoService.todos.splice(todo);
    }
}
