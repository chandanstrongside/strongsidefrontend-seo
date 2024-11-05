import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { map } from 'rxjs/operators';
import { Attendance } from '../../models/team-management';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get<Attendance>('attendance-get?id=' + id).pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('attendance-search', param, httpOptions);
  };
  add(attendance: Attendance) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('attendance-save', attendance, httpOptions);
  };
  update(attendance: Attendance) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('attendance-update', attendance, httpOptions);
  };
  getMonthlyData(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CalendarEvent[]>('attendance-get-calender-data', param, httpOptions);
  };
  absentPlayers() {
    return this.http.get<any[]>('attendance-current-date-absent').pipe(map(resp => resp));
  };
}
