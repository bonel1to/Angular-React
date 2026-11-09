import { Component } from '@angular/core';

interface ShoppingItem {
  id: number;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingListComponent {
  items: ShoppingItem[] = [];
  private nextId = 1;

  get completedCount(): number {
    return this.items.filter((item) => item.done).length;
  }

  addItem(input: HTMLInputElement): void {
    const name = input.value.trim();
    if (!name) return;

    this.items.push({ id: this.nextId++, name, done: false });
    input.value = '';
  }

  toggleItem(id: number, event: Event): void {
    const done = (event.target as HTMLInputElement).checked;
    this.items = this.items.map((item) => item.id === id ? { ...item, done } : item);
  }
}
