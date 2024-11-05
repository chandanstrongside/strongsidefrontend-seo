import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coverage } from '../../models/defense/index';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Coverage[]> {
    return this.http.get<Coverage[]>('coverage-all');
  }
  get(id: string) {
    return this.http.get<Coverage>('coverageById?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('coverage-Search', param, httpOptions);
  }
  add(coverage: Coverage) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('coverage-save', coverage, httpOptions);
  }
  edit(coverage: Coverage) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('coverage-update', coverage, httpOptions);
  }
}