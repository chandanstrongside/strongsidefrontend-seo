import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Concept } from 'src/app/data/models/offense'

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(
    private http: HttpClient,
  ) { }
  getAll() {
    return this.http.get<Concept[]>('concept-all').pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('concept-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<Concept>('concept-get?id=' + id).pipe(map(resp => resp));
  };
  getBySearchText(srchText: string, playbookId?: string) {
    return this.http.get<Concept[]>('concept-get-srchText?srchText=' + srchText + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  add(concept: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('concept-save', concept, httpOptions);
  };
  update(concept: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('concept-update', concept, httpOptions);
  };
  favorite(id: string) {
    return this.http.get<any>('concept-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('concept-archive?id=' + id).pipe(map(resp => resp));
  };
  dislike(id: string) {
    return this.http.get<any>('concept-dislike?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('concept-delete?id=' + id).pipe(map(resp => resp));
  };
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('concept-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('concept-delete-archive').pipe(map(resp => resp));
  }
  getWeb(id: string) {
    return this.http.get<any>('concept-get-web?id=' + id).pipe(map(resp => resp));
  };
  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('concept-add-screenshots', formData, httpOptions);
  };
  deleteScreenshot(id?: string, conceptId?: string) {
    return this.http.delete<any>('concept-delete-screenshots?id=' + id + '&conceptId=' + conceptId).pipe(map(resp => resp));
  };
  defaultImg(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('concept-default-img', model, httpOptions);
  };
  getplaysName(id: string) {
    return this.http.get<any>('concept-related?id=' + id).pipe(map(resp => resp));
  };
  generatePlays(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('concept-generate-plays', model, httpOptions);
  };
  getConceptHash(id: string) {
    return this.http.get<any>('concept-get-hash?id=' + id).pipe(map(resp => resp));
  };
  saveConceptHash(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('concept-save-hash', formData, httpOptions);
  };
  copy_concept(referenceId: string, playbookId?: string) {
    return this.http.get<any>('concept-copy?referenceId=' + referenceId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  updateReuqiredMessage(conceptId: string, message: string) {
    return this.http.get<any>('offense-concepts-update-message?conceptId=' + conceptId + '&message=' + message).pipe(map(resp => resp));
  };
  getConceptAllMedia() {
    return this.http.get<any>('concept-all-with-media').pipe(map(resp => resp));
  };
  getConceptFootballMind(id: string) {
    return this.http.get<any>('concept-football-minds?id=' + id).pipe(map(resp => resp));
  };

  getplaysNamePublicView(id: string, accountId: string) {
    return this.http.get<any>('concept-related-public?id=' + id + '&accountId=' + accountId).pipe(map(resp => resp));
  };
}