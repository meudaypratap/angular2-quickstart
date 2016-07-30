import { Component } from '@angular/core';
import { TodoListComponent } from './todoList.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
<todo-list></todo-list>
  `,
    directives: [TodoListComponent]

})
export class AppComponent { }
