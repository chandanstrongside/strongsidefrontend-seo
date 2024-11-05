import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaybookService {

  constructor(
    private http: HttpClient,
  ) { }
  getAccountMaster(referenceId: string) {
    return this.http.get<any>('playbook-get-account-master?referenceId=' + referenceId).pipe(map(resp => resp));
  };

  copyData(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('playbook-copy-data', model, httpOptions);
  };

  getDefault() {
    return this.http.get<any>('playbook-get-default').pipe(map(resp => resp));
  };

  get(id: string) {
    return this.http.get<any>('playbook-get?id=' + id).pipe(map(resp => resp));
  };

  getPurchasablePlaybookDetails(playbookId: string) {
    return this.http.get<any>('purchase-playbook-details-get?playbookId=' + playbookId).pipe(map(resp => resp));
  };

  upgradePackage() {
    return this.http.get<any>('upgrade-package').pipe(map(resp => resp));
  };

  getMyPlaybook() {
    return this.http.get<any>('playbook-get-myplaybook').pipe(map(resp => resp));
  };

  getOffensePlabookDashboardData(playbookId: string , limit: number) {
    return this.http.get<any>('playbook-dashboard-data?playbookId=' + playbookId  + '&limit=' + limit).pipe(map(resp => resp));
  };

  all(){
    return this.http.get<any>('playbook-all').pipe(map(resp => resp));
  }

  getOffensePublicPlabookDashboardData(playbookId: string , limit: number, accountId: string) {
    return this.http.get<any>('playbook-public-dashboard-data?playbookId=' + playbookId  + '&limit=' + limit + '&accountId=' + accountId).pipe(map(resp => resp));
  };

}
