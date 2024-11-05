import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../../models/media/index';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>('images-all');
  }
  get(id: string) {
    return this.http.get<Image>('images-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('images-search', param, httpOptions);
  }
  add(image: Image) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('image-save', image, httpOptions);
  }
  edit(image: Image) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('image-update', image, httpOptions);
  }
}