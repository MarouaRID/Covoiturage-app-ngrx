import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Offre } from '../models/offre.model';
 
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    let offres: Offre[] = [
      { id: '1', depart: 'Alger', destination: "Oran" ,date:new Date()},
      { id: '2', depart: 'A' , destination: "B",date:new Date() },
     
      
    ];  
    return {offres};   
  }  
}