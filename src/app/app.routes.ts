import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'beer/:id',
    loadComponent: () => import('./beer-details/beer-details.page').then((m) => m.BeerDetailsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
