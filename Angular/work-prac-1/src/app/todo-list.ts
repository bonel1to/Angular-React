import { Component, inject } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  favorites = inject(FavoritesService);

  filter: 'all' | 'active' | 'done' = 'all';

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

  get filteredTodos(): Todo[] {
    if (this.filter === 'active') return this.todos.filter((todo) => !todo.done);
    if (this.filter === 'done') return this.todos.filter((todo) => todo.done);
    return this.todos;
  }

  addTodo(input: HTMLInputElement): void {
    this.todoService.addTodo(input.value);
    input.value = '';
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
    this.favorites.remove(id);
  }
}
