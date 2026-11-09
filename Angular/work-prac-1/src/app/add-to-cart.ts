import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  templateUrl: './add-to-cart.html',
  styleUrl: './add-to-cart.css',
})
export class AddToCartComponent {
  private cart = inject(CartService);

  add(nameInput: HTMLInputElement, priceInput: HTMLInputElement): void {
    const price = Number(priceInput.value);
    if (!nameInput.value.trim() || priceInput.value === '' || !Number.isFinite(price) || price < 0) return;

    this.cart.addItem(nameInput.value, price);
    nameInput.value = '';
    priceInput.value = '';
  }
}
