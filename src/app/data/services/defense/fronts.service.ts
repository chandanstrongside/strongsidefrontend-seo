import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fronts } from '../../models/defense/index';

@Injectable({
  providedIn: 'root'
})
export class FrontsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Fronts[]> {
    return this.http.get<Fronts[]>('fronts-all');
  }
  get(id: string) {
    return this.http.get<Fronts>('fronts-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('fronts-Search', param, httpOptions);
  }
  add(fronts: Fronts) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('fronts-save', fronts, httpOptions);
  }
  update(fronts: Fronts) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('fronts-update', fronts, httpOptions);
  }
  favorite(id: string) {
    return this.http.get<any>('fronts-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('fronts-archive?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('fronts-delete?id=' + id).pipe(map(resp => resp));
  };
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('fronts-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('fronts-delete-archive').pipe(map(resp => resp));
  };

  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('defense-front-addScreenshort', formData, httpOptions);
  };

  deleteScreenshot(id?: string, frontId?: string) {
    return this.http.delete<any>('defense-front-delete-screenshots?id=' + id + '&frontId=' + frontId).pipe(map(resp => resp));
  };
}