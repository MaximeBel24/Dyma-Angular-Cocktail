import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss',
  host: {
    '(window:keydown)': 'keyboardInteraction($event)',
  },
})
export class CocktailsListComponent {
  search = viewChild<ElementRef<HTMLInputElement>>('search');
  filter = signal('');
  cocktails = input<Cocktail[]>();
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({ name }) =>
      name.toLowerCase().includes(this.filter().toLowerCase())
    )
  );
  selectedCocktailId = model<string | null>();
  likedCocktailIds = input.required<string[]>();
  likeCocktail = output<string>();
  unlikeCocktail = output<string>();

  keyboardInteraction({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape': {
        this.selectedCocktailId.set(null);
        break;
      }
      case 'Enter': {
        const selectedCocktailId = this.selectedCocktailId();
        if (selectedCocktailId) {
          if (this.likedCocktailIds().includes(selectedCocktailId)) {
            this.unlikeCocktail.emit(selectedCocktailId);
          } else {
            this.likeCocktail.emit(selectedCocktailId);
          }
        }
        break;
      }
      case 'ArrowUp':
      case 'ArrowDown': {
        const selectedCocktailId = this.selectedCocktailId();
        const cocktails = this.cocktails();
        if (cocktails?.length) {
          if (selectedCocktailId) {
            const index = cocktails.findIndex(
              ({ _id }) => _id === selectedCocktailId
            );
            if (key === 'ArrowDown') {
              const nextCocktailIndex =
                index === cocktails.length - 1 ? 0 : index + 1;
              this.selectedCocktailId.set(cocktails[nextCocktailIndex]._id);
            } else {
              const nextCocktailIndex =
                index === 0 ? cocktails.length - 1 : index - 1;
              this.selectedCocktailId.set(cocktails[nextCocktailIndex]._id);
            }
          } else {
            if (key === 'ArrowDown') {
              const { _id } = cocktails[0];
              this.selectedCocktailId.set(_id);
            } else {
              const { _id } = cocktails.at(-1)!;
              this.selectedCocktailId.set(_id);
            }
          }
        }
        break;
      }

      default: {
        this.search()?.nativeElement.focus();
      }
    }
  }
}
