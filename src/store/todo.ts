import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/todo";

class Todo {
  todos = [
    {
      id: 1,
      title: "Покушать",
      compeleted: false,
    },
    {
      id: 2,
      title: "Отжумания",
      compeleted: false,
    },
    {
      id: 3,
      title: "Пресс качать",
      compeleted: true,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }
  removeTodo() {}
  completeTodo() {}
}

export default new Todo();
