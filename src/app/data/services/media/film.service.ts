import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../../models/media/index';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient,
  ) { }

  all(): Observable<Film[]> {
    return this.http.get<Film[]>('films-all');
  }
}