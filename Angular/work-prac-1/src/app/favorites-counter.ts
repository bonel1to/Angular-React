import { Component, inject } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites-counter',
  standalone: true,
  templateUrl: './favorites-counter.html',
})
export class FavoritesCounterComponent {
  favorites = inject(FavoritesService);
}
