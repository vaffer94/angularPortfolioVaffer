import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriettaComponent } from './orietta.component';

describe('OriettaComponent', () => {
  let component: OriettaComponent;
  let fixture: ComponentFixture<OriettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriettaComponent]
    });
    fixture = TestBed.createComponent(OriettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
