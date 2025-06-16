import { Injectable, resource } from '@angular/core';
import { Cocktail } from '../interfaces';
import { httpResource } from '@angular/common/http';
import { delay } from 'rxjs';

const BASE_URL = 'https://restapi.fr/api/acocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {

  // cocktailsResource = resource({
  //   loader: async (): Promise<Cocktail[]> =>
  //     (await fetch(this.BASE_URL)).json(),
  // });

  cocktailsResource = httpResource<Cocktail[]>(() => ({
    url: BASE_URL,
    defaultValue: [],
    params: { delay: 1 },
  }));

  async deleteCocktail(cocktailId: string) {
    await fetch(`${BASE_URL}/${cocktailId}`, {
      method: 'DELETE',
    });
    this.cocktailsResource.reload();
  }
}