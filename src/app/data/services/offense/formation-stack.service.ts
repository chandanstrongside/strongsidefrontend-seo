import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseFormation, FormationStack } from '../../models/offense';

@Injectable({
  providedIn: 'root'
})
export class FormationStackService {

  constructor(
    private http: HttpClient,
  ) { }
  getAll() {
    return this.http.get<FormationStack[]>('formation-stack-all').pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('formation-stack-search', param, httpOptions);
  }
  // get(id: string) {
  //   return this.http.get<FormationStack>('formation-stack-get/' + id + '/' + 1 + '/' + 20).pipe(map(resp => resp));
  // }
  get(id: string) {
    return this.http.get<FormationStack>('formation-stack-get?id=' + id).pipe(map(resp => resp));
  };
  getBySearchText(srchText: string) {
    return this.http.get<FormationStack[]>('formation-stack-get-srchText?srchText=' + srchText).pipe(map(resp => resp));
  };
  add(formationStack: FormationStack) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('formation-stack-save', formationStack, httpOptions);
  };
  update(formationStack: FormationStack) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('formation-stack-update', formationStack, httpOptions);
  }
  favorite(id: string) {
    return this.http.get<any>('formation-stack-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('formation-stack-archive?id=' + id).pipe(map(resp => resp));
  };
  dislike(id: string) {
    return this.http.get<any>('formation-stack-dislike?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('formation-stack-delete?id=' + id).pipe(map(resp => resp));
  }
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('formation-stack-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('formation-stack-delete-archive').pipe(map(resp => resp));
  }
  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('formation-stack-add-screenshots', formData, httpOptions);
  };
  // uploadScreenshot(formData: any) {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
  //   return this.http.post('formation-stack-add-screenshots', formData,{
  //     reportProgress: true,
  //     observe: "events"
  //   });
  // };
  allBaseFormation(playbookId?: string): Observable<FormationStack[]> {
    return this.http.get<FormationStack[]>('formation-stack-base-all?playbookId=' + playbookId);
  }
  getPlayerPositionByFormation(conceptId: string, formationId: string) {
    return this.http.get<FormationStack>('formation-stack-base-formation-position?conceptId=' + conceptId + '&formationId=' + formationId).pipe(map(resp => resp));
  }
  deleteScreenshot(id?: string, formationSetId?: string, isAutoGenarated?: boolean) {
    return this.http.delete<any>('formation-stack-delete-screenshots?id=' + id + '&formationSetId=' + formationSetId + '&isAutoGenarated=' + isAutoGenarated).pipe(map(resp => resp));
  };
  defaultImg(id?: string, formationSetId?: string, fileSeq?: string, thumbnailSeq?: string) {
    return this.http.get<any>('formation-stack-default-img?id=' + id + '&formationSetId=' + formationSetId + '&fileSeq=' + fileSeq + '&thumbnailSeq=' + thumbnailSeq).pipe(map(resp => resp));
  };
  getFormationStackRelated(id: string) {
    return this.http.get<any>('formation-stack-Related?id=' + id).pipe(map(resp => resp));
  };
  getBaseFormationBySearchText(srchText: string) {
    return this.http.get<BaseFormation[]>('formation-stack-get-base-srchText?srchText=' + srchText).pipe(map(resp => resp));
  };
  getSearchText(srchText: string, formationId?: string, playbookId?: string) {
    return this.http.get<FormationStack[]>('formation-stack-get-by-srchText?srchText=' + srchText + '&formationId=' + formationId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  copy_set(referenceId: string, playbookId?: string) {
    return this.http.get<any>('formation-stack-copy?referenceId=' + referenceId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  updateReuqiredMessage(formationstackId: string, message: string) {
    return this.http.get<any>('offense-formation-stack-update-message?formationstackId=' + formationstackId + '&message=' + message).pipe(map(resp => resp));
  };
  getFormationStackAllMedia() {
    return this.http.get<any>('formation-stack-all-with-media').pipe(map(resp => resp));
  };
  getFormationSetFootballMind(id: string) {
    return this.http.get<any>('formationset-football-minds?id=' + id).pipe(map(resp => resp));
  };
  getPlayByConceptAndFormation(conceptId: string, formationId: string) {
    return this.http.get<any>('play-by-concept-formation?conceptId=' + conceptId + '&formationId=' + formationId).pipe(map(resp => resp));
  }
}
