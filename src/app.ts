import { Todo } from './todo';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

export class App {
  // create the pties
  heading = 'TodoList';
  subHeading = 'Welcome to my todoList applications';
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
  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  removeTodos() {
    this.todos = [];
  }
}
