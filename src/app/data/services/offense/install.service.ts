import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Install } from 'src/app/data/models/offense'
import { Quizee } from 'src/app/data/models/offense';

@Injectable({
  providedIn: 'root'
})
export class InstallService {

  constructor(
    private http: HttpClient,
  ) { }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('installs-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<any>('installs-get?id=' + id).pipe(map(resp => resp));
  };
  add(install: Install) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('installs-save', install, httpOptions);
  };
  update(install: Install) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('installs-update', install, httpOptions);
  };
  favorite(id: string) {
    return this.http.get<any>('installs-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('installs-archive?id=' + id).pipe(map(resp => resp));
  };
  delete(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('installs-delete', ids, httpOptions);
  };
  getModalOptionData(type: string, srchString: string) {
    return this.http.get<any>('installs-get-modal-option-data?type=' + type + '&srchString=' + srchString).pipe(map(resp => resp));
  };
  deleteDetails(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('installs-delete-details', model, httpOptions);
  };
  getImagesByOrigin(type: string, originId: string) {
    return this.http.get<any>('installs-get-images-by-origin?type=' + type + '&originId=' + originId).pipe(map(resp => resp));
  };
  getPresentation(id: string) {
    return this.http.get<any>('installs-get-presentaion?id=' + id).pipe(map(resp => resp));
  };
  saveInstallActivity(installId: string, detailsId: string) {
    return this.http.get<any>('installs-save-activity?installId=' + installId + '&detailsId=' + detailsId).pipe(map(resp => resp));
  };
  updateInstallActivity(installId: string, detailsId: string) {
    return this.http.get<any>('installs-update-activity?installId=' + installId + '&detailsId=' + detailsId).pipe(map(resp => resp));
  };
  getActivity(id: string) {
    return this.http.get<any>('installs-get-activity?id=' + id).pipe(map(resp => resp));
  };
  getActivityDetails(installId: string, playerId: string) {
    return this.http.get<any>('installs-get-activity-details?installId=' + installId + '&playerId=' + playerId).pipe(map(resp => resp));
  };


  addQuiz(quiz: Quizee) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('installs-quizsave', quiz, httpOptions);
  };
  updateQuiz(quiz: Quizee) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('installs-quizupdate', quiz, httpOptions);
  };
  getquiz(data: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('installs-quizget', data, httpOptions);
  };
  saveParticipateQuiz(data: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('installs-quizParticipateSave', data, httpOptions);
  };
  getParticipateQuiz(id: string) {
    return this.http.get<any>('installs-getquizParticipate?Id=' + id).pipe(map(resp => resp));
  };
  getquizParcipants(data: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('installs-get-quiz-participants', data, httpOptions);
  };

  public(id: string) {
    return this.http.get<any>('public-installs?id=' + id).pipe(map(resp => resp));
  };

  getAllPublicInstall() {
    return this.http.get<any>('all-public-installs').pipe(map(resp => resp));
  };

  getPublicPresentation(id: string) {
    return this.http.get<any>('public-installs-presentaion?id=' + id).pipe(map(resp => resp));
  };
}