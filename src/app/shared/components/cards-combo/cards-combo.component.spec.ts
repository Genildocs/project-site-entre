import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComboComponent } from './cards-combo.component';

describe('CardsComboComponent', () => {
  let component: CardsComboComponent;
  let fixture: ComponentFixture<CardsComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsComboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
