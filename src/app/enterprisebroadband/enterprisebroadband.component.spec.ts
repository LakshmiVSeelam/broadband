import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterprisebroadband } from './enterprisebroadband.component';

describe('Enterprisebroadband', () => {
  let component: Enterprisebroadband;
  let fixture: ComponentFixture<Enterprisebroadband>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enterprisebroadband ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enterprisebroadband);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
