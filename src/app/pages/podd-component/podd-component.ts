import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-podd-component',
  imports: [NgOptimizedImage, MatGridListModule],
  templateUrl: './podd-component.html',
  styleUrl: './podd-component.scss',
})
export class PoddComponent {}
