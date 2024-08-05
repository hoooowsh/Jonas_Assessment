import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTableComponent } from './pizza-table.component';

describe('PizzaTableComponent', () => {
  let component: PizzaTableComponent;
  let fixture: ComponentFixture<PizzaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
