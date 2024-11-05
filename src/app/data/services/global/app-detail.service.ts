import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppDetailService {

  constructor(
    private http: HttpClient,
  ) { }

  getCurrentVersion() {
    return this.http.get<any>('appDetails-get-current-version').pipe(map(resp => resp));
  }

	downloadSoftwareReq(email: string, option: string) {
		return this.http.get<any>('download-software?email=' + email + '&option=' + option).pipe(map(resp => resp));
	};

  downloadedSoftware(option: string) {
		return this.http.get<any>('downloaded-software?option=' + option).pipe(map(resp => resp));
	};
}
