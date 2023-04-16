import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BeerApiService } from '../core/api/beer/beer-api.service';
import { BeerItem } from '../core/interfaces/beer-item';
import { FavoritesService } from '../core/services/favorites.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.page.html',
  styleUrls: ['./beer-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class BeerDetailsPage implements OnInit {
  beer!: BeerItem;

  constructor(
    private beerApiService: BeerApiService,
    private favoritesService: FavoritesService,
    private route: ActivatedRoute
  ) { }

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.beer.id);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.beerApiService.getBeerItem(+id)
        .subscribe(res => {
          this.beer = res;
        });
    }
  }

  addToFavorites(): void {
    this.favoritesService.addToStorage(this.beer);
  }

  removeFromFavorites(): void {
    this.favoritesService.removeFromStorage(this.beer.id);
  }
}
