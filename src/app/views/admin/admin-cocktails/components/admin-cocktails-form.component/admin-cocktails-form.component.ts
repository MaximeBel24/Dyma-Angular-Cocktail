import { Component, computed, effect, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CocktailsService } from '../../../../../shared/services/cocktails.service';
import { Cocktail, CocktailForm } from '../../../../../shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-admin-cocktails-form.component',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-cocktails-form.component.html',
  styleUrl: './admin-cocktails-form.component.scss',
  host: {
    class: 'card',
  },
})
export class AdminCocktailsFormComponent {
  private fb = inject(FormBuilder);
  private cocktailService = inject(CocktailsService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  cocktails = computed(() => this.cocktailService.cocktailsResource.value());
  cocktailId = toSignal(this.activatedRoute.params)()!['cocktailId'];
  isLoading = signal(false);

  cocktailForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: [''],
    description: [''],
    ingredients: this.fb.array([]),
  });

  initCocktailFormEffect = effect(() => {
    if (this.cocktailId) {
      const cocktails = this.cocktails();
      if (cocktails) {
        const { name, imageUrl, description, ingredients } = cocktails.find(
          ({ _id }) => this.cocktailId === _id
        )!;
        this.cocktailForm.patchValue({
          name,
          imageUrl,
          description,
        });
        ingredients.forEach((i) =>
          this.ingredientsControl.push(this.fb.control(i))
        );
        this.initCocktailFormEffect.destroy();
      }
    } else {
      this.initCocktailFormEffect.destroy();
    }
  });

  get ingredientsControl() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  get nameControl() {
    return this.cocktailForm.get('name');
  }

  addIngredient() {
    this.ingredientsControl.push(this.fb.control(''));
  }

  deleteIngredient(index: number) {
    this.ingredientsControl.removeAt(index);
  }

  async submit(): Promise<void> {
    this.isLoading.set(true);
    try {
      if (this.cocktailId) {
        await this.cocktailService.editCocktail({
          ...this.cocktailForm.getRawValue(),
          _id: this.cocktailId,
        } as Cocktail);
      } else {
        await this.cocktailService.createCocktail(
          this.cocktailForm.getRawValue() as CocktailForm
        );
      }
      this.router.navigateByUrl('/admin/cocktails/list');
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading.set(false);
    }
  }
}
