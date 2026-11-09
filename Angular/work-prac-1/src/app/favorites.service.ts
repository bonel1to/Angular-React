import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoriteIds = new Set<number>();

  toggle(id: number): void {
    if (this.favoriteIds.has(id)) this.favoriteIds.delete(id);
    else this.favoriteIds.add(id);
  }

  remove(id: number): void {
    this.favoriteIds.delete(id);
  }

  isFavorite(id: number): boolean {
    return this.favoriteIds.has(id);
  }

  getCount(): number {
    return this.favoriteIds.size;
  }
}
