import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktailsListComponent } from './admin-cocktails-list.component';

describe('AdminCocktailsListComponent', () => {
  let component: AdminCocktailsListComponent;
  let fixture: ComponentFixture<AdminCocktailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCocktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
