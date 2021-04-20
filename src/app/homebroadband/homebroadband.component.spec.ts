import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebroadbandComponent } from './homebroadband.component';

describe('HomebroadbandComponent', () => {
  let component: HomebroadbandComponent;
  let fixture: ComponentFixture<HomebroadbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebroadbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebroadbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
