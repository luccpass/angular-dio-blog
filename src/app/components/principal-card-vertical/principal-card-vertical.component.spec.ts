import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCardVerticalComponent } from './principal-card-vertical.component';

describe('PrincipalCardVerticalComponent', () => {
  let component: PrincipalCardVerticalComponent;
  let fixture: ComponentFixture<PrincipalCardVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalCardVerticalComponent]
    });
    fixture = TestBed.createComponent(PrincipalCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
