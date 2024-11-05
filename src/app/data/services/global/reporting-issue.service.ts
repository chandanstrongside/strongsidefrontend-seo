import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportingIssueService {

  constructor(
    private http: HttpClient,
  ) { }

  save(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('save-reporting-issue', formData, httpOptions);
  };

  all(limit: number) {
    return this.http.get<any[]>('all-reporting-issue?limit=' + limit).pipe(map(resp => resp));
  };
}
