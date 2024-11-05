import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagePaymentService {

  constructor(private http: HttpClient) { }

  packageAllSubscripton() {
    return this.http.get<any[]>('package-all-subscription');
  };
}
