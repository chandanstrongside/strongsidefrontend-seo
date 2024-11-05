import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PracticeSchedule } from '../../models/offense';

@Injectable({
  providedIn: 'root'
})
export class PracticeScheduleService {

  constructor(private http: HttpClient
  ) { }
  get(id: string) {
    return this.http.get<PracticeSchedule>('practice-schedule-get?id=' + id).pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('practice-schedule-search', param, httpOptions);
  };
  add(practiceSchedule: PracticeSchedule) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('practice-schedule-save', practiceSchedule, httpOptions);
  };
  update(practiceSchedule: PracticeSchedule) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('practice-schedule-update', practiceSchedule, httpOptions);
  };
}
