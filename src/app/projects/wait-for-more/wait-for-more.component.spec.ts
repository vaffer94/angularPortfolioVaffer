import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForMoreComponent } from './wait-for-more.component';

describe('WaitForMoreComponent', () => {
  let component: WaitForMoreComponent;
  let fixture: ComponentFixture<WaitForMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitForMoreComponent]
    });
    fixture = TestBed.createComponent(WaitForMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
