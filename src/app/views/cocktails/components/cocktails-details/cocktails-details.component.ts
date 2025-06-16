import { Component, input, output } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces';

@Component({
  selector: 'app-cocktails-details',
  imports: [],
  templateUrl: './cocktails-details.component.html',
  styleUrl: './cocktails-details.component.scss',
})
export class CocktailsDetailsComponent {
  cocktail = input.required<Cocktail>();
  isLiked = input.required<boolean>();
  likeCocktail = output<string>();
  unlikeCocktail = output<string>();
  addIngredients = output<string[]>();
}
