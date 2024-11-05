import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player, PlayerUser } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) { }

  allPlayers(): Observable<any[]> {
    return this.http.get<any[]>('all-players');
  };

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>('player-all');
  };

  get(id: string) {
    return this.http.get<Player>('playerUser-get?Id=' + id).pipe(map(resp => resp));
  };

  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('playerUser-search', param, httpOptions);
  };

  add(player: Player) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('playerUser-save', player, httpOptions);
  };

  edit(player: Player) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('playerUser-update', player, httpOptions);
  };

  allMajors(): Observable<any[]> {
    return this.http.get<any[]>('majors-all');
  };

  allExtracurricular(): Observable<any[]> {
    return this.http.get<any[]>('extracurriculars-all');
  };

  playerRegistration(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('playerUser-registration', formData, httpOptions);
  };

  resendInvite(id: string) {
    return this.http.get<Player>('playerUser-resend-invite?id=' + id).pipe(map(resp => resp));
  };

  playerDelete(id: string) {
    return this.http.delete<any>('playerUser-delete?id=' + id).pipe(map(resp => resp));
  };

  checkUserNameAvailability(userName: string, userId?: string) {
    return this.http.get<any>('playerUser-user-name-availability?userName=' + userName + '&userId=' + userId).pipe(map(resp => resp));
  };

  getAllGlobal(): Observable<Player[]> {
    return this.http.get<Player[]>('player-all-global');
  };

  getAllGlobalByTeam(teamId?: string): Observable<Player[]> {
    return this.http.get<Player[]>('player-all-global-by-team?teamId=' + teamId);
  };

  showTimeInvite(email: string) {
    return this.http.get<any>('player-ShowTimeInvite?email=' + email).pipe(map(resp => resp));
  };

  allByMedia(fileSequence: string) {
    return this.http.get<any[]>('player-get-media?fileSequence=' + fileSequence).pipe(map(resp => resp));
  };

  saveMedia(mediaObj: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('player-save-media', mediaObj, httpOptions);
  };

  getPlayerLimitForPackge() {
    return this.http.get<any>('player-limit');
  };

  sharePlayer(email: string) {
    return this.http.get<any>('player-share?email=' + email).pipe(map(resp => resp));
  };

  getPlayer(id: string) {
    return this.http.get<any>('playerUser-get?Id=' + id).pipe(map(resp => resp));
  };

  updatePlayerData(player: PlayerUser) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('playerUser-bigboard-update', player, httpOptions);
  };

  getShowTimePlayerData(id: string) {
    return this.http.get<any>('showTime-profile?Id=' + id).pipe(map(resp => resp));
  };

  deleteDemoAccount() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('demo-account-dlt', httpOptions);
  };

  allPlayersForSms() {
    return this.http.get<any>('player-for-sms');
  };

  updateMobile(obj: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('update-mobile', obj, httpOptions);
  };

  getUnregisterPlayer(accountId: string) {
    return this.http.get<any>('playerUser-get-unregister?accountId=' + accountId).pipe(map(resp => resp));
  };

  getAllPlayer(searchText: string) {
    return this.http.get<Player[]>('all-player-by-search?searchText=' + searchText);
  };

  updatePlayerProperty(playerProp: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('update-player-properties', playerProp, httpOptions);
  };

  PlayerPasswordReset(player: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('player-password-reset', player, httpOptions);
  };
}
