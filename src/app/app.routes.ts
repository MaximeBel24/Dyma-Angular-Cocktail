import { Routes } from '@angular/router';
import { CocktailsComponent } from './views/cocktails/cocktails.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CartComponent } from './views/cart/cart.component';

export const routes: Routes = [
  {
    path: 'cocktails',
    component: CocktailsComponent,
    title: 'Cocktails'
  },
  {
    path: 'cart',
    loadComponent: async() => (await import('./views/cart/cart.component')).CartComponent,
    title: 'Panier'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cocktails',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Introuvable'
  },
];
