import { Component, ViewChild } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

import { BeerApiService } from '../core/api/beer/beer-api.service';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { BeerItem } from '../core/interfaces/beer-item';
import { FavoritesService } from '../core/services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, BeerCardComponent],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  
  pageIndex: number = 1;
  lastPage: number = 3;

  private pageIndex$ = new BehaviorSubject<number>(this.pageIndex);

  beerList$: Observable<BeerItem[]> = this.pageIndex$
    .pipe(
      switchMap(value => this.beerApiService.getBeerList(value))
    );

  constructor(
    private beerApiService: BeerApiService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): BeerItem[] {
    return this.favoritesService.favorites;
  }

  previousPage(): void {
    this.pageIndex--;
    this.pageIndex$.next(this.pageIndex)
  }

  nextPage(): void {
    this.pageIndex++;
    this.pageIndex$.next(this.pageIndex)
  }

  cancelModal() {
    this.modal.dismiss(null, 'cancel');
  }
}
