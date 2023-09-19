import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersArticlesCardComponent } from './others-articles-card.component';

describe('OthersArticlesCardComponent', () => {
  let component: OthersArticlesCardComponent;
  let fixture: ComponentFixture<OthersArticlesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersArticlesCardComponent]
    });
    fixture = TestBed.createComponent(OthersArticlesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
