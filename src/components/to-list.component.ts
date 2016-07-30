import { Component, OnInit }   from '@angular/core';

@Component({
    selector:    'todo-list',
    templateUrl: 'src/todo-list.component.html',
})

export class TodoListComponent implements OnInit {
    todos: string[];
    selectedTodo: string;

    ngOnInit() {
        this.todos = ["eat", "drink", "sleep"];
    }

    selectTodo(todo: string) { this.selectedTodo = todo; }
}