import { Routes } from '@angular/router';
import { AdminCocktailsComponent } from './admin-cocktails.component';
import { AdminCocktailsListComponent } from './components/admin-cocktails-list.component/admin-cocktails-list.component';
import { AdminCocktailsFormComponent } from './components/admin-cocktails-form.component/admin-cocktails-form.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminCocktailsComponent,
    children: [
      {
        path: 'list',
        component: AdminCocktailsListComponent,
      },
      {
        path: 'new',
        component: AdminCocktailsFormComponent,
      },
      {
        path: ':cocktailId/edit',
        component: AdminCocktailsFormComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
