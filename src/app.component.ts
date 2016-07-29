import {Component} from '@angular/core';
import {TodoListComponent} from './to-list.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello, Geeks</h1>
                <todo-list> </todo-list>
`,
    directives: [TodoListComponent]
})

export class MyApp {
}
