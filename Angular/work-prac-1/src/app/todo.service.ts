import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly storageKey = 'todos';
  private todos: Todo[] = [
    { id: 1, text: 'Изучить Angular', done: false },
    { id: 2, text: 'Сделать проект', done: false },
  ];
  private nextId = 3;

  constructor() {
    this.load();
  }

  getTodos(): Todo[] {
    return [...this.todos];
  }

  addTodo(text: string): void {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    this.todos = [...this.todos, { id: this.nextId++, text: trimmedText, done: false }];
    this.save();
  }

  toggleTodo(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
    this.save();
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.save();
  }

  private load(): void {
    const savedTodos = localStorage.getItem(this.storageKey);
    if (!savedTodos) return;

    try {
      const todos: Todo[] = JSON.parse(savedTodos);
      if (!Array.isArray(todos)) return;

      this.todos = todos;
      this.nextId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
    } catch {
      // Если в хранилище некорректные данные, остаётся начальный список.
    }
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }
}
