import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominadosComponent } from './nominados.component';

describe('NominadosComponent', () => {
  let component: NominadosComponent;
  let fixture: ComponentFixture<NominadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
