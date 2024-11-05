import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guide } from 'src/app/data/models/team-development'

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(
    private http: HttpClient,
  ) { }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('guides-search', param, httpOptions);
  }
  get(id: string) {
    return this.http.get<Guide>('guides-get?Id=' + id).pipe(map(resp => resp));
  }
  add(guide: Guide) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('guides-save', guide, httpOptions);
  }
  update(guide: Guide) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('guides-update', guide, httpOptions);
  }

  searchPlayerguide(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('guides-search-player', param, httpOptions);
  }
  getQuizByPlayerGuide(guideId: string, playerGuideId: string) {
    return this.http.get<any>('guides-get-quiz-by-player-guide?guideId=' + guideId + '&playerGuideId=' + playerGuideId).pipe(map(resp => resp));
  }
  savePlayerGuideQuiz(guide: Guide) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('guides-save-player-guide', guide, httpOptions);
  }  
  guideAllDetails(guideId: string, playerGuideId: string) {
    return this.http.get<any>('guides-all-details?guideId=' + guideId + '&playerGuideId=' + playerGuideId).pipe(map(resp => resp));
  }
  guideGetNextQuiz(guideId: string, quizIndex: number) {
    return this.http.get<any>('guides-get-next-quiz?guideId=' + guideId + '&quizIndex=' + quizIndex).pipe(map(resp => resp));
  }
}