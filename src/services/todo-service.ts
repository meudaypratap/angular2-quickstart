import { Todo }   from '../model/Todo.model';

export class TodoService {
 todos:Todo[] = [];
 currentTodo: Todo;

 addTodo(todo:Todo):void{
  console.log(todo.title, this.todos.length);
  this.todos.push(todo);
 }

}