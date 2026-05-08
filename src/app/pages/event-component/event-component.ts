import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryShowcase } from '../../partials/gallery-showcase/gallery-showcase';


@Component({
  selector: 'app-event-component',
  imports: [NgOptimizedImage, GalleryShowcase],
  templateUrl: './event-component.html',
  styleUrl: './event-component.scss',
})
export class EventComponent {}
