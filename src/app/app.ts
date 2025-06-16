import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CocktailsComponent } from "./components/cocktails/cocktails.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CocktailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'cocktails';
}
