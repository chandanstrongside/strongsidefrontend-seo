import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiPath = 'https://strongside-api-prod.azurewebsites.net/web-api/api/v2/';
  constructor(
    private http: HttpClient,
  ) { }

  getOffensePublicPlabookDashboardData(playbookId: string, limit: number, accountId: string) {
    return this.http.get<any>(this.apiPath + 'playbook-public-dashboard-data?playbookId=' + playbookId + '&limit=' + limit + '&accountId=' + accountId).pipe(map(resp => resp));
  };

  publicPlaySearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post(this.apiPath + 'offense-plays-public-search', param, httpOptions);
  };

  getPublicPlayView(id: string) {
    return this.http.get<any>(this.apiPath + 'public-offense-plays-get?id=' + id).pipe(map(resp => resp));
  };

  getPublicModifierView(id: string) {
    return this.http.get<any>(this.apiPath + 'public-modifier-get?id=' + id).pipe(map(resp => resp));
  };

  getPublicFormationSetView(id: string) {
    return this.http.get<any>(this.apiPath + 'public-formationset-get?id=' + id).pipe(map(resp => resp));
  };

  getPublicFormationView(id: string) {
    return this.http.get<any>(this.apiPath + 'public-formation-get?id=' + id).pipe(map(resp => resp));
  };

  ConvertIntoTinyUrl(orginalUrl: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiPath + 'convert-into-tiny-url?orginalUrl=' + orginalUrl, httpOptions);
  };

  getplaysNamePublicView(id: string, accountId: string) {
    return this.http.get<any>(this.apiPath + 'concept-related-public?id=' + id + '&accountId=' + accountId).pipe(map(resp => resp));
  };

  getFormationRelated(id: string) {
    return this.http.get<any>(this.apiPath + 'formation-related?id=' + id).pipe(map(resp => resp));
  };

  getRelatedByPlays(id: string, accountId: string) {
    return this.http.get<any>(this.apiPath + 'offensive-plays-related-public?id=' + id + '&accountId=' + accountId).pipe(map(resp => resp));
  };

  getRelatedByPlay(id: string) {
    return this.http.get<any>(this.apiPath + 'offensive-plays-related?id=' + id).pipe(map(resp => resp));
  };

  getPublicConceptView(id: string) {
    return this.http.get<any>(this.apiPath + 'public-concept-get?id=' + id).pipe(map(resp => resp));
  };
}
