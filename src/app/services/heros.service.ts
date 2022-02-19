import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../Hero';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private apiUrl = 'http://localhost:3000/heros'

  constructor(private http:HttpClient) { }

  getHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl, httpOptions)
  }

  getSingleHero(heroId: number): Observable<Hero>{
    return this.http.get<Hero>(this.apiUrl + `/${heroId}`, httpOptions)
  }

  rateHero(hero: Hero): Observable<Hero>{
    const url = `${this.apiUrl}/${hero.id}`;
    return this.http.put<Hero>(url, hero, httpOptions)
  }
}
