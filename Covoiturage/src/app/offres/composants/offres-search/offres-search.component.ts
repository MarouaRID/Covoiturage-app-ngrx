import { Component, OnInit } from '@angular/core';
import{OffreService} from '../../services/offre.service';
import { AppState } from '../../../store/reducer/index';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Offre } from '../../models/offre.model';
import { searchOffresAction } from '../../store/offre.actions';
import { getAllOffres } from './../../store/offre.selectors';
import {offreActions } from '.././../store/offre.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {getSearched} from '../../store/offre.selectors'
@Component({
  selector: 'app-offres-search',
  templateUrl: './offres-search.component.html',
  styleUrls: ['./offres-search.component.css']
})
export class OffresSearchComponent implements OnInit {
  offres$: Observable<Offre[]>;
depart:string;
destination:string;
 constructor(private service: OffreService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  onSearch(value:any){
   
    this.store.dispatch(searchOffresAction(value));
  
  this.offres$ =this.store.select(getAllOffres);
  }
}
