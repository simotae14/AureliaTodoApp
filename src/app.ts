import { Todo } from './todo';

export class App {
  // create the pties
  heading = 'My Tasks';
  newTodo = '';
  todos : Todo[] = [];

  // create the methods
  addTodo() {
    if (this.newTodo) {
      this.todos.push(new Todo(this.newTodo));
      // clear value
      this.newTodo = '';
    }
  }
  removetodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
