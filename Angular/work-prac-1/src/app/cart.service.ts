import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private nextId = 1;

  getItems(): CartItem[] {
    return this.items.map((item) => ({ ...item }));
  }

  addItem(name: string, price: number): void {
    const trimmedName = name.trim();
    if (!trimmedName || !Number.isFinite(price) || price < 0) return;

    const existing = this.items.find((item) => item.name.toLowerCase() === trimmedName.toLowerCase());
    if (existing) {
      this.items = this.items.map((item) => item.id === existing.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
      );
      return;
    }
    this.items = [...this.items, { id: this.nextId++, name: trimmedName, price, quantity: 1 }];
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clear(): void {
    this.items = [];
  }
}
