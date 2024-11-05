import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FaqService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>("get-all-faq").pipe(map((resp) => resp));
  };

  add(faq: any) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.post("save-faq", faq, httpOptions);
  };

  update(faq: any) {
    const httpOptions = {
      headers: new HttpHeaders({ "content-Type": "application/json" }),
    };
    return this.http.put("update-faq", faq, httpOptions);
  };

  getAllPublic(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('public-get-all-faq', param, httpOptions);
  };
}
