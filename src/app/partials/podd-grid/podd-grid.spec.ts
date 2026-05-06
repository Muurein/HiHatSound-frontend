import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoddGrid } from './podd-grid';

describe('PoddGrid', () => {
  let component: PoddGrid;
  let fixture: ComponentFixture<PoddGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoddGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(PoddGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
