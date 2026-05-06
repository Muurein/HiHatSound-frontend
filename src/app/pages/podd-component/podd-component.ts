import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PoddPortfolioService } from '../../services/poddportfolio/poddPortfolio-service';
import { PoddPortfolio } from '../../models/podd-portfolio';
import { PoddGrid } from '../../partials/podd-grid/podd-grid';


@Component({
  selector: 'app-podd-component',
  imports: [NgOptimizedImage, MatGridListModule, PoddGrid],
  templateUrl: './podd-component.html',
  styleUrl: './podd-component.scss',
})
export class PoddComponent {


}
