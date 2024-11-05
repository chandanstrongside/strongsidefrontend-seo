import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stunts } from '../../models/defense/index';

@Injectable({
  providedIn: 'root'
})
export class StuntsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Stunts[]> {
    return this.http.get<Stunts[]>('stunts-all');
  }
  get(id: string) {
    return this.http.get<Stunts>('stuntsById?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('stunts-Search', param, httpOptions);
  }
  add(stunts: Stunts) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('stunts-save', stunts, httpOptions);
  }
  edit(stunts: Stunts) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('stunts-update', stunts, httpOptions);
  }
}