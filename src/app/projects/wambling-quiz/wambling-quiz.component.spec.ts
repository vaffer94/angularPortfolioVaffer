import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WamblingQuizComponent } from './wambling-quiz.component';

describe('WamblingQuizComponent', () => {
  let component: WamblingQuizComponent;
  let fixture: ComponentFixture<WamblingQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WamblingQuizComponent]
    });
    fixture = TestBed.createComponent(WamblingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
