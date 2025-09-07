import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomRelaxComponent } from './mushroom-relax.component';

describe('MushroomRelaxComponent', () => {
  let component: MushroomRelaxComponent;
  let fixture: ComponentFixture<MushroomRelaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MushroomRelaxComponent]
    });
    fixture = TestBed.createComponent(MushroomRelaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
