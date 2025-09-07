import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchItComponent } from './catch-it.component';

describe('CatchItComponent', () => {
  let component: CatchItComponent;
  let fixture: ComponentFixture<CatchItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatchItComponent]
    });
    fixture = TestBed.createComponent(CatchItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
