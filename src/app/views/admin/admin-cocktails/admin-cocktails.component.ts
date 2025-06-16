import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-cocktails',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-cocktails.component.html',
  styleUrl: './admin-cocktails.component.scss',
})
export class AdminCocktailsComponent {}
