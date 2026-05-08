import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Gallery } from '../../models/gallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private url: string = `${environment.apiUrl}/gallery`;

  constructor(private http: HttpClient) {

  };

  //GET gallery
  getGallery(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.url);
  }
}
