import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OffensePlay } from 'src/app/data/models/offense'

@Injectable({
  providedIn: 'root'
})
export class OffensePlayService {

  constructor(
    private http: HttpClient,
  ) { }
  getAll() {
    return this.http.get<OffensePlay>('offense-plays-all').pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('offense-plays-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<OffensePlay>('offense-plays-get?id=' + id).pipe(map(resp => resp));
  };
  getBySearchText(srchText: string, formationId?: string, conceptId?: string) {
    return this.http.get<OffensePlay[]>('offense-plays-get-srchText?srchText=' + srchText + '&formationId=' + formationId + '&conceptId=' + conceptId).pipe(map(resp => resp));
  };
  add(play: OffensePlay) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('offense-plays-save', play, httpOptions);
  };
  update(play: OffensePlay) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('offense-plays-update', play, httpOptions);
  };
  favorite(id: string) {
    return this.http.get<any>('offense-plays-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('offense-plays-archive?id=' + id).pipe(map(resp => resp));
  };
  dislike(id: string) {
    return this.http.get<any>('offense-plays-dislike?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('offense-plays-delete?id=' + id).pipe(map(resp => resp));
  };
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('offense-plays-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('offense-plays-delete-archive').pipe(map(resp => resp));
  }
  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('offense-plays-add-screenshots', formData, httpOptions);
  };
  deleteScreenshot(id?: string, playId?: string) {
    return this.http.delete<any>('offense-plays-delete-screenshots?id=' + id + '&playId=' + playId).pipe(map(resp => resp));
  };
  defaultImg(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('offense-plays-default-img', model, httpOptions);
  };
  getPlaysHash(id: string) {
    return this.http.get<any>('offense-plays-get-hash?id=' + id).pipe(map(resp => resp));
  };
  savePlaysHash(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('offense-plays-save-hash', formData, httpOptions);
  };
  copy_play(referenceId: string, playbookId?: string) {
    return this.http.get<any>('offense-plays-copy?referenceId=' + referenceId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  updateReuqiredMessage(playId: string, message: string) {
    return this.http.get<OffensePlay>('offense-plays-update-message?playId=' + playId + '&message=' + message).pipe(map(resp => resp));
  };
  getPlays(conceptId: string, formationId: string, searchText: string, skip: number, limit: number) {
    return this.http.get<any>('offense-plays-get-plays?conceptId=' + conceptId + '&formationId=' + formationId + '&searchText=' + searchText + '&skip=' + skip + '&limit=' + limit).pipe(map(resp => resp));
  };
  getPlaysAllMedia() {
    return this.http.get<any>('offense-plays-all-with-media').pipe(map(resp => resp));
  };
  getPlaysFootballMind(id: string) {
    return this.http.get<any>('offense-plays-football-minds?id=' + id).pipe(map(resp => resp));
  };
  getPlaysScout(conceptId: string, formationId: string, searchText: string, page: number, limit: number) {
    return this.http.get<any>('offense-get-scout-plays?conceptId=' + conceptId + '&formationId=' + formationId + '&searchText=' + searchText + '&page=' + page + '&limit=' + limit).pipe(map(resp => resp));
  };
  getRelatedByPlays(id: string) {
    return this.http.get<any>('offensive-plays-related?id=' + id).pipe(map(resp => resp));
  };
  getConceptRelatedPlays(id: string) {
    return this.http.get<any>('concept-related-plays?id=' + id).pipe(map(resp => resp));
  };
}