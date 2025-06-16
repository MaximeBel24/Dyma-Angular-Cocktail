import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-cart-ingredients-list',
  imports: [],
  templateUrl: './cart-ingredients-list.component.html',
  styleUrl: './cart-ingredients-list.component.scss',
})
export class CartIngredientsListComponent {
  ingredients = input<string[]>();

  constructor() {
    effect(() => {
      console.log(this.ingredients());
    });
  }
}
