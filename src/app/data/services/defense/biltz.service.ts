import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Biltz } from '../../models/defense/index';

@Injectable({
  providedIn: 'root'
})
export class BiltzService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Biltz[]> {
    return this.http.get<Biltz[]>('biltz-all');
  }
  get(id: string) {
    return this.http.get<Biltz>('biltzById?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('biltz-Search', param, httpOptions);
  }
  add(biltz: Biltz) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('biltz-save', biltz, httpOptions);
  }
  edit(biltz: Biltz) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('biltz-update', biltz, httpOptions);
  }
}