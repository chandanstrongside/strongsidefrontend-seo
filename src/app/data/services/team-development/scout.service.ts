import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoutService {

  constructor(
    private http: HttpClient,
  ) { }

  get(id: string) {
    return this.http.get<any>('scouts-view-get?id=' + id).pipe(map(resp => resp));
  };

  save(scout: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('scouts-view-save', scout, httpOptions);
  };

  update(scout: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('scouts-view-update', scout, httpOptions);
  };

  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('scouts-view-search', param, httpOptions);
  };

  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('scouts-view-add-screenshort', formData, httpOptions);
  };
}
