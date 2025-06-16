import { Component, computed, inject, signal } from '@angular/core';
import { CocktailsService } from '../../shared/services/cocktails.service';
import { CartService } from '../../shared/services/cart.service';
import { CocktailsListComponent } from "./components/cocktails-list/cocktails-list.component";
import { CocktailsDetailsComponent } from "./components/cocktails-details/cocktails-details.component";

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailsDetailsComponent],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent {
    cocktailsService = inject(CocktailsService);
  cartService = inject(CartService);

  cocktails = computed(
    () => this.cocktailsService.cocktailsResource.value() || []
  );
  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(() =>
    this.cocktails().find(({ _id }) => _id === this.selectedCocktailId())
  );

  selectedCocktailLiked = computed(() => {
    const selectedCocktailId = this.selectedCocktailId();
    return selectedCocktailId
      ? this.likedCocktailIds().includes(selectedCocktailId)
      : false;
  });

  likedCocktailIds = computed(() => this.cartService.likeCocktailIds());

  likeCocktail(cocktailId: string) {
    this.cartService.likeCocktail(cocktailId);
  }

  unlikeCocktail(cocktailId: string) {
    this.cartService.unlikeCocktail(cocktailId);
  }

  cocktailsIsLoading = this.cocktailsService.cocktailsResource.isLoading;
}
