import { Component, computed, inject } from '@angular/core';
import { CartIngredientsListComponent } from './components/cart-ingredients-list/cart-ingredients-list.component';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CartIngredientsListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private cartService = inject(CartService);
  ingredients = computed(() => this.cartService.ingredients());
}
