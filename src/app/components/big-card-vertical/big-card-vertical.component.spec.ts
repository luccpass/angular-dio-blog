import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardVerticalComponent } from './big-card-vertical.component';

describe('BigCardVerticalComponent', () => {
  let component: BigCardVerticalComponent;
  let fixture: ComponentFixture<BigCardVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCardVerticalComponent]
    });
    fixture = TestBed.createComponent(BigCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
