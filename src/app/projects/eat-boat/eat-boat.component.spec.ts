import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatBoatComponent } from './eat-boat.component';

describe('EatBoatComponent', () => {
  let component: EatBoatComponent;
  let fixture: ComponentFixture<EatBoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatBoatComponent]
    });
    fixture = TestBed.createComponent(EatBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
