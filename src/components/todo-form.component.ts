import { Component, OnInit }   from '@angular/core';
import { Todo }   from '../model/Todo.model';
import {TodoService} from "../services/todo-service";

@Component({
    selector:    'todo-form',
    templateUrl: 'src/todo-form.component.html'
    // providers: [TodoService]
})

export class TodoFormComponent implements OnInit {
    currentTodo: Todo;

    ngOnInit() {
        this.currentTodo = new Todo("", 0);
    }

    createTodo():void {
        this.todoService.addTodo(this.currentTodo);
        this.currentTodo = new Todo("", 0);
    }

    constructor(private todoService: TodoService){

    }

}
