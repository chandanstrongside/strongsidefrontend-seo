import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from 'src/app/data/models/offense'

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(
    private http: HttpClient,
  ) { }
  getAll() {
    return this.http.get<Formation[]>('formation-all').pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('formation-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<Formation>('formation-get?id=' + id).pipe(map(resp => resp));
  };
  getBySearchText(srchText: string) {
    return this.http.get<Formation[]>('formation-get-srchText?srchText=' + srchText).pipe(map(resp => resp));
  };
  add(formation: Formation) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('formation-save', formation, httpOptions);
  };
  update(formation: Formation) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('formation-update', formation, httpOptions);
  };
  favorite(id: string) {
    return this.http.get<any>('formation-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('formation-archive?id=' + id).pipe(map(resp => resp));
  };
  dislike(id: string) {
    return this.http.get<any>('formation-dislike?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('formation-delete?id=' + id).pipe(map(resp => resp));
  }
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('formation-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('formation-delete-archive').pipe(map(resp => resp));
  }
  setDefault(id: string) {
    return this.http.get<any>('formation-set-default?id=' + id).pipe(map(resp => resp));
  };
  // uploadScreenshot(formData: any) {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
  //   return this.http.post('formation-add-screenshots', formData,{
  //     reportProgress: true,
  //     observe: "events"
  //   });
  // };
  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('formation-add-screenshots', formData, httpOptions);
  };
  deleteScreenshot(id?: string, formationId?: string) {
    return this.http.delete<any>('formation-delete-screenshots?id=' + id + '&formationId=' + formationId).pipe(map(resp => resp));
  };
  defaultImg(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('formation-default-img', model, httpOptions);
  };
  getFormationRelated(id: string) {
    return this.http.get<any>('formation-related?id=' + id).pipe(map(resp => resp));
  };
  generatePlays(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('formation-generate-plays', model, httpOptions);
  };
  getFormationHash(id: string) {
    return this.http.get<any>('formation-get-hash?id=' + id).pipe(map(resp => resp));
  };
  saveFormationHash(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('formation-save-hash', formData, httpOptions);
  };
  getSearchText(srchText: string, formationSetId?: string, playbookId?: string) {
    return this.http.get<Formation[]>('formation-get-by-text?srchText=' + srchText + '&formationSetId=' + formationSetId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  copy_formation(referenceId: string, playbookId?: string) {
    return this.http.get<any>('formation-copy?referenceId=' + referenceId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  updateReuqiredMessage(formationId: string, message: string) {
    return this.http.get<any>('offense-formations-update-message?formationId=' + formationId + '&message=' + message).pipe(map(resp => resp));
  };
  getFormationAllMedia() {
    return this.http.get<any>('formation-all-with-media').pipe(map(resp => resp));
  };
  getFormationFootballMind(id: string) {
    return this.http.get<any>('formations-football-minds?id=' + id).pipe(map(resp => resp));
  };
}