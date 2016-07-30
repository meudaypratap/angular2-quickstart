import { Component, OnInit }   from '@angular/core';
import {TodoService} from "../services/todo-service";


@Component({
    selector:    'todo-list',
    templateUrl: 'src/todo-list.component.html'
    // providers: [TodoService]
})

export class TodoListComponent implements OnInit {

    ngOnInit() {

    }

    getTodos(){
        console.log("todo list", this.todoService.todos.length);
        return this.todoService.todos;
    }


    constructor(private todoService: TodoService){

    }
}