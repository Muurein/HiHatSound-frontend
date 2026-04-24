import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoddComponent } from './podd-component';

describe('PoddComponent', () => {
  let component: PoddComponent;
  let fixture: ComponentFixture<PoddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PoddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
