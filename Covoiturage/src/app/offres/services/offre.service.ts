import { Offre } from '../models/offre.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
@Injectable()
export class OffreService  {

  http: HttpClient;
  url:'api/offres'

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllOffres(): Observable<  Offre[]> {
    return this.http.get<Offre[]>('api/offres');
  }

  createOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>('api/offres', offre);
  }

  deleteOffre(Id: string): Observable<any> {
    return this.http.delete('api/offres' + Id);
  }

  updateOffre(Id: string | number, changes: Partial<Offre>): Observable<any> {
    return this.http.put('/api/offres/' + Id, changes);
  }
  searchOffre(depart:string,destination:string):Observable<Offre[]>{
   
    return this.http.get<Offre[]>('api/offres?depart=${term} AND destination=${destination}');
}
}