import { Component, OnInit }   from '@angular/core';
import { Todo }   from '../model/Todo.model';

@Component({
    selector:    'todo-form',
    templateUrl: 'src/todo-form.component.html'
})

export class TodoFormComponent implements OnInit {
    todos: Todo[];
    currentTodo: Todo;

    ngOnInit() {
        this.todos = [];
        this.currentTodo = new Todo();
    }

    createTodo():void {
        this.todos.push(this.currentTodo);
        this.currentTodo = new Todo();
    }
}
