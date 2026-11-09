import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list';
import { ClickCounterComponent } from './click-counter';
import { ShoppingListComponent } from './shopping-list';
import { CounterAComponent } from './counter-a';
import { CounterBComponent } from './counter-b';
import { AddToCartComponent } from './add-to-cart';
import { CartViewComponent } from './cart-view';
import { FavoritesCounterComponent } from './favorites-counter';

@Component({
  imports: [
    RouterOutlet,
    TodoListComponent,
    ClickCounterComponent,
    ShoppingListComponent,
    CounterAComponent,
    CounterBComponent,
    AddToCartComponent,
    CartViewComponent,
    FavoritesCounterComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
