import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardHorizontalComponent } from './small-card-horizontal.component';

describe('SmallCardHorizontalComponent', () => {
  let component: SmallCardHorizontalComponent;
  let fixture: ComponentFixture<SmallCardHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCardHorizontalComponent]
    });
    fixture = TestBed.createComponent(SmallCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
