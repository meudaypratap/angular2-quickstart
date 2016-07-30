import {bootstrap} from '@angular/platform-browser-dynamic';
import  {MyApp} from './components/app.component';
import {TodoService} from "./services/todo-service";
import { appRouterProviders } from './app.routes';

bootstrap(MyApp, [TodoService, appRouterProviders]).catch(err => console.error(err));