import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakdownSet } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class BreakdownSetService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<BreakdownSet[]> {
    return this.http.get<BreakdownSet[]>('all-breakdownSet');
  }
  get(id: string) {
    return this.http.get<BreakdownSet>('breakdownSetById?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('breakdownSet-Search', param, httpOptions);
  }
  add(breakdownSet: BreakdownSet) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('breakdownSet-save', breakdownSet, httpOptions);
  }
  edit(breakdownSet: BreakdownSet) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('breakdownSet-update', breakdownSet, httpOptions);
  }
}