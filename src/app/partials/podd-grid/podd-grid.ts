import { Component} from '@angular/core';
import { PoddPortfolio } from '../../models/podd-portfolio';
import { PoddPortfolioService } from '../../services/poddportfolio/poddPortfolio-service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-podd-grid',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, MatCardModule],
  templateUrl: './podd-grid.html',
  styleUrls: ['./podd-grid.scss'],
})

export class PoddGrid {
  //properties
  poddPortfolio$: Observable<PoddPortfolio[]>;

  constructor(private poddPortfolioService: PoddPortfolioService) {

    this.poddPortfolio$ = this.poddPortfolioService.getPoddPortfolio();
    
  }
}
