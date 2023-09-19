import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCardVerticalComponent } from './medium-card-vertical.component';

describe('MediumCardVerticalComponent', () => {
  let component: MediumCardVerticalComponent;
  let fixture: ComponentFixture<MediumCardVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumCardVerticalComponent]
    });
    fixture = TestBed.createComponent(MediumCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
