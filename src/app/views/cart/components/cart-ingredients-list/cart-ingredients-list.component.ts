import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-cart-ingredients-list',
  imports: [],
  templateUrl: './cart-ingredients-list.component.html',
  styleUrl: './cart-ingredients-list.component.scss',
})
export class CartIngredientsListComponent {
  ingredients = input<string[]>([]);

  ingredientDisplays = computed(() =>
    Object.entries(
      this.ingredients().reduce((acc, i) => {
        if (acc[i]) {
          acc[i]++;
        } else {
          acc[i] = 1;
        }
        return acc;
      }, {} as { [s: string]: number })
    )
  );

  constructor() {
    effect(() => {
      console.log(this.ingredients());
      console.log(this.ingredientDisplays());
    });
  }
}
