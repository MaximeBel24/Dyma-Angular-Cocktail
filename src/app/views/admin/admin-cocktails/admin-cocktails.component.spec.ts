import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktailsComponent } from './admin-cocktails.component';

describe('AdminCocktailsComponent', () => {
  let component: AdminCocktailsComponent;
  let fixture: ComponentFixture<AdminCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
