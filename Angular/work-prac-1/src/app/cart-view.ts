import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.css',
})
export class CartViewComponent {
  cart = inject(CartService);
}
