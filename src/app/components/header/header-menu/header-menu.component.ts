import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  show = signal(false);
  navigations = [
    {
      path: '#',
      name: 'Liste des cocktails',
    },
    {
      path: '#',
      name: 'Panier',
    },
  ];

  toggleMenu() {
    this.show.update((s) => !s);
  }
}
