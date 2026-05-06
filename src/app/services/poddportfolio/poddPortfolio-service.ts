import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoddPortfolio } from '../../models/podd-portfolio';

@Injectable({
  providedIn: 'root',
})
export class PoddPortfolioService {

  private url: string = `${environment.apiUrl}/poddportfolio`;

  constructor(private http: HttpClient) {

  };

  //GET poddPortfolio
  getPoddPortfolio(): Observable<PoddPortfolio[]> {
    return this.http.get<PoddPortfolio[]>(this.url);
  }

}
