import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktailsFormComponent } from './admin-cocktails-form.component';

describe('AdminCocktailsFormComponent', () => {
  let component: AdminCocktailsFormComponent;
  let fixture: ComponentFixture<AdminCocktailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCocktailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
