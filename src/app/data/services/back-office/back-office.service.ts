import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  constructor(private http: HttpClient) { }

  add(question: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('save-question', question, httpOptions);
  };

  update(question: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('update-question', question, httpOptions);
  };

  searchQuestion(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-question', param, httpOptions);
  };

  questionGet(id: string) {
    return this.http.get<any>('get-question?id=' + id).pipe(map(resp => resp));
  };

  deleteQuestion(id: string) {
    return this.http.delete('delete-question?id=' + id).pipe(map(resp => resp));
  };
  
  getAllSharedQuestion(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('all-shared-question', param, httpOptions);
  };

  sharedQuestionGet(id: string) {
    return this.http.get<any>('get-shared-question?id=' + id).pipe(map(resp => resp));
  };

  sensResendQuestion(questionShareMOdel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('send-resend-question', questionShareMOdel , httpOptions);
  };

  NotifyUnAnswered(questionIds: string[]) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('notify-unanswered', questionIds, httpOptions);
  }

  response(answerResponse: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('question-response-save', answerResponse, httpOptions);
  };

  reportGet(id: string) {
    return this.http.get<any>('report-data?id=' + id).pipe(map(resp => resp));
  };
}
