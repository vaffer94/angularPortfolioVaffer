import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleItComponent } from './bubble-it.component';

describe('BubbleItComponent', () => {
  let component: BubbleItComponent;
  let fixture: ComponentFixture<BubbleItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleItComponent]
    });
    fixture = TestBed.createComponent(BubbleItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
