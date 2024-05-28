import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {
  private apiUrl = 'https://nameday.abalin.net/api/V1';

  constructor(private http: HttpClient) { }

  getNameday(name:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getname/?name=${name}&country=bg`);
  }
}