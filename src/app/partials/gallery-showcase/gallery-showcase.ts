import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/gallery/gallery-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-showcase.html',
  styleUrls: ['./gallery-showcase.scss'],
})
export class GalleryShowcase {
  //properties
  galleryShowcase$: Observable<Gallery[]>;

  constructor(private galleryService: GalleryService) {
    this.galleryShowcase$ = this.galleryService.getGallery();

  }
}
