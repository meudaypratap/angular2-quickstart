import { provideRouter, RouterConfig } from '@angular/router';
import {TodoListComponent} from './components/to-list.component'
import {TodoFormComponent} from './components/todo-form.component'


const routes: RouterConfig = [
    { path: 'form', component: TodoFormComponent },
    { path: 'list', component: TodoListComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];