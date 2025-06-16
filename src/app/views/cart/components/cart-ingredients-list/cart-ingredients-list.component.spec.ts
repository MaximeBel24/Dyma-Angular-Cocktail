import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIngredientsListComponent } from './cart-ingredients-list.component';

describe('CartIngredientsListComponent', () => {
  let component: CartIngredientsListComponent;
  let fixture: ComponentFixture<CartIngredientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartIngredientsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartIngredientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
