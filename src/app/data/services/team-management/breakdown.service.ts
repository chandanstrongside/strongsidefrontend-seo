import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakdown } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class BreakdownService {

  constructor(
    private http: HttpClient,
  ) { }

  allColumnTypes(): Observable<any[]> {
    return this.http.get<any[]>('all-breakdown-column-types');
  }
  getAll(): Observable<Breakdown[]> {
    return this.http.get<Breakdown[]>('all-breakdown');
  }
  get(id: string) {
    return this.http.get<Breakdown>('breakdownById?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('breakdown-Search', param, httpOptions);
  }
  add(breakdown: Breakdown) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('breakdown-save', breakdown, httpOptions);
  }
  edit(breakdown: Breakdown) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('breakdown-update', breakdown, httpOptions);
  }
  delete(id: string) {
    return this.http.delete('breakdown-delete?id=' + id).pipe(map(resp => resp));
  }
  deleteValue(id: string, value: string) {
    return this.http.delete('breakdown-delete-value?id=' + id + '&value=' + value).pipe(map(resp => resp));
  }
  getColumnPossibleValueById(columnId: string) {
    return this.http.get<any[]>('breakdown-column-possiblevalue-by-id?columnId=' + columnId).pipe(map(resp => resp));
  }
}