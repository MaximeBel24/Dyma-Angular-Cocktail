import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  show = signal(false);
  navigations = [
    {
      path: '/cocktails',
      name: 'Cocktails',
    },
    {
      path: '/cart',
      name: 'Panier',
    },
  ];

  toggleMenu() {
    this.show.update((s) => !s);
  }
}
