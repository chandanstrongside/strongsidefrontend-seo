import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceEventService {

  constructor(private http: HttpClient) { }

  addEventType(eventType: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('save-event-Type', eventType, httpOptions);
  };
  getBySearchTextEventType(srchText: string) {
    return this.http.get<any[]>('event-type-search?srchText=' + srchText).pipe(map(resp => resp));
  };
  addAttendanceEvent(attendanceEvent: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('attendance-event-save', attendanceEvent, httpOptions);
  }
  updateAttendanceEvent(attendanceEvent: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.put('attendance-event-update', attendanceEvent, httpOptions);
  };
  searchAttendanceEvent(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-attendance-event', param, httpOptions);
  };
  getAttendanceEvent(id: string) {
    return this.http.get<any>('attendance-event-get?id=' + id).pipe(map(resp => resp));
  };
  getQrCode(id: string) {
    return this.http.get<any>('generate-event-qr?id=' + id).pipe(map(resp => resp));
  };
  SavePlayerAttendanceEvent(playerAttendanceEvent: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('player-attendance-event', playerAttendanceEvent, httpOptions);
  };
  getAttendedPlayers(eventId: string, orderDir: string) {
    return this.http.get<any>('player-attendance-event-response?eventId=' + eventId + '&orderDir=' + orderDir).pipe(map(resp => resp));
  };
  searchAttendanceEventSingleReport() {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('single-attendance-event', httpOptions);
  };
  getAttendanceEventSingle(id: string) {
    return this.http.get<any>('single-attendance-event-detail?eventTypeId=' + id).pipe(map(resp => resp));
  };
  getAttendanceEventTypeRpt(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('typewise-attendance-event-rpt', param, httpOptions);
  };
  getBySearchTextOtherEvent(srchText: string) {
    return this.http.get<any[]>('other-event-search?srchText=' + srchText).pipe(map(resp => resp));
  };
  addOtherEvent(otherEvent: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('save-other-event', otherEvent, httpOptions);
  };
  updateOtherEvent(otherEvent: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('update-other-event', otherEvent, httpOptions);
  };
  SavePlayerAttendanceReport(playerAttendanceReport: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('save-attendance-report', playerAttendanceReport, httpOptions);
  };
  topAttendanceEventPlayers(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('top-attendance', param, httpOptions);
  };
  attendanceEventTabData() {
    return this.http.get<any>('attendance-event-tab').pipe(map(resp => resp));
  };
  calenderEvent() {
    return this.http.get<any>('calender-event').pipe(map(resp => resp));
  };
  AttendanceReportSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('attendance-report-search', param, httpOptions);
  };
  getEventReport(id: string) {
    return this.http.get<any>('attendance-event-rpt?eventId=' + id).pipe(map(resp => resp));
  };
  getQrCodeAsPdf(eventId: string) {
    return this.http.get<any>('attendance-event-qrCode?eventId=' + eventId).pipe(map(resp => resp));
  };
  getLineChartData(eventTypeId: string) {
    return this.http.get<any>('line-graph-data?eventTypeId=' + eventTypeId).pipe(map(resp => resp));
  };
  getAttendanceEventWisePlayers(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('event-wise-player-attendance', param, httpOptions);
  };
  eventWiseTeamAttendanceRank() {
    return this.http.get<any>('event-wise-team-Rank').pipe(map(resp => resp));
  };
  getLast5EventsRpt() {
    return this.http.get<any>('last-5-attendance-Rpt').pipe(map(resp => resp));
  };
  getPlayerDetailsAgainstEvent(eventId: string, type: string) {
    return this.http.get<any>('player-data-regarding-attendance-event?eventId=' + eventId + '&type=' + type).pipe(map(resp => resp));
  };
}
