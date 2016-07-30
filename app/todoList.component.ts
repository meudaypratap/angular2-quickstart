import { Component, OnInit } from '@angular/core';
import { Todo} from './Todo';

@Component({
    selector: 'todo-list',
    templateUrl: './templates/todos.html'
})
export class TodoListComponent implements OnInit {
    todos: Todo[];
    selectedTodo: Todo;
    priorities: number[];
    ngOnInit() {
        this.todos = [];
        this.priorities = [1, 2, 3];
        this.selectedTodo = new Todo();
    }
    selectTodo(todo: Todo) {
        this.selectedTodo = todo;
    }
    addTodo() {
        this.todos.push(this.selectedTodo);
        this.selectedTodo = new Todo();
    }
    removeTodo(todo: Todo) {
        this.todos.splice(todo);
    }
}
