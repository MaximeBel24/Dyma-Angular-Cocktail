import { Component, computed, inject } from '@angular/core';
import { CocktailsService } from '../../../../../shared/services/cocktails.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-cocktails-list.component',
  imports: [RouterLink],
  templateUrl: './admin-cocktails-list.component.html',
  styleUrl: './admin-cocktails-list.component.scss',
  host: {
    class: 'card',
  },
})
export class AdminCocktailsListComponent {
  cocktailsService = inject(CocktailsService);
  cocktails = computed(
    () => this.cocktailsService.cocktailsResource.value() || []
  );
  deleteCocktail(cocktailId: string) {
    this.cocktailsService.deleteCocktail(cocktailId);
  }
}
