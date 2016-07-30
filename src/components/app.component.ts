import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {TodoListComponent} from './to-list.component'
import {TodoFormComponent} from './todo-form.component'


@Component({
    selector: 'my-app',
    template: `<h1>Hello, Geeks</h1>    
                <a routerLink="/form" routerLinkActive="active">form</a>
                <a routerLink="/list" routerLinkActive="active">list</a>
                <router-outlet></router-outlet>
`,
    directives: [TodoFormComponent, TodoListComponent, ROUTER_DIRECTIVES]
})

export class MyApp {

}
