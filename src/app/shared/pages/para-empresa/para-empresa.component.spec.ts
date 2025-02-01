import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaEmpresaComponent } from './para-empresa.component';

describe('ParaEmpresaComponent', () => {
  let component: ParaEmpresaComponent;
  let fixture: ComponentFixture<ParaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParaEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
