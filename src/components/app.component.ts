import {Component} from '@angular/core';
// import {TodoListComponent} from './to-list.component'
import {TodoFormComponent} from './todo-form.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello, Geeks</h1>
                <!--<todo-list> </todo-list>-->
                <todo-form></todo-form>
`,
    directives: [TodoFormComponent]
})

export class MyApp {
}
