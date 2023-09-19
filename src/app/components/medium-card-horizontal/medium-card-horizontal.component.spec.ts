import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCardHorizontalComponent } from './medium-card-horizontal.component';

describe('MediumCardHorizontalComponent', () => {
  let component: MediumCardHorizontalComponent;
  let fixture: ComponentFixture<MediumCardHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumCardHorizontalComponent]
    });
    fixture = TestBed.createComponent(MediumCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
