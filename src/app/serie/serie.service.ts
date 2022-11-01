import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
private apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

getCourses(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.apiUrl);
}
}
