import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Needs } from '../../models/bigboard/needs';

@Injectable({
  providedIn: 'root'
})
export class NeedsService {

  constructor(private http: HttpClient,) { }

  getAll(): Observable<Needs[]> {
    return this.http.get<Needs[]>('need-all');
  };
  get(id: string) {
    return this.http.get<Needs>('need-get?id=' + id).pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('need-Search', param, httpOptions);
  };
  add(needs: Needs) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('need-save', needs, httpOptions);
  };
  update(need: Needs) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('need-Update', need, httpOptions);
  };
}
