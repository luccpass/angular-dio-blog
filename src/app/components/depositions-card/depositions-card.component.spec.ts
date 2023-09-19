import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsCardComponent } from './depositions-card.component';

describe('DepositionsCardComponent', () => {
  let component: DepositionsCardComponent;
  let fixture: ComponentFixture<DepositionsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositionsCardComponent]
    });
    fixture = TestBed.createComponent(DepositionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
