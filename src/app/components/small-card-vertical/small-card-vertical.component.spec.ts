import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardVerticalComponent } from './small-card-vertical.component';

describe('SmallCardVerticalComponent', () => {
  let component: SmallCardVerticalComponent;
  let fixture: ComponentFixture<SmallCardVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCardVerticalComponent]
    });
    fixture = TestBed.createComponent(SmallCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
