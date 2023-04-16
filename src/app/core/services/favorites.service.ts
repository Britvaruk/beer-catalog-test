import { Injectable } from "@angular/core";
import { BeerItem } from "../interfaces/beer-item";

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: BeerItem[] = this.getCurrentList();

  addToStorage(beerItem: BeerItem): void {
    if (!this.isFavorite(beerItem.id)) {
      this.favorites.push(beerItem);
      localStorage.setItem('favotires', JSON.stringify(this.favorites));
    }
  }

  removeFromStorage(id: number): void {
    this.favorites = this.favorites.filter(item => item.id !== id);
    localStorage.setItem('favotires', JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return !!this.favorites.find(item => item.id === id);
  }

  getCurrentList(): BeerItem[] {
    const currentFavorites = localStorage.getItem('favotires');
    return currentFavorites ? JSON.parse(currentFavorites) : [];
  }
}