import { TestBed } from '@angular/core/testing';

import { PoddPortfolioService } from './poddPortfolio-service';

describe('PoddService', () => {
  let service: PoddPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoddPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
