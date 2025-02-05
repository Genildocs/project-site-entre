import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAssineComponent } from './button-assine.component';

describe('ButtonAssineComponent', () => {
  let component: ButtonAssineComponent;
  let fixture: ComponentFixture<ButtonAssineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAssineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAssineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
