import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: HttpClient) { }

  sendMessage(sms: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('conversation-send-Message', sms, httpOptions);
  };

  allConversationUser() {
    return this.http.get<any>('conversation-users');
  }

  getUserChats(id: string, userId: string, playerId: string) {
    return this.http.get<any>('conversation-sync-get-Message?conversationId=' + id + '&userId=' + userId + '&playerId=' + playerId).pipe(map(resp => resp));
  }

  sendContinueSms(obj: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('send-Message', obj, httpOptions);
  };
}
