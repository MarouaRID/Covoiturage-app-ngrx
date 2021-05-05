
import { Offre } from './../../models/offre.model';
import { createOffre } from './../../store/offre.actions';
import { AppState } from '../../../store/reducer/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-offres-add',
  templateUrl: './offres-add.component.html',
  styleUrls: ['./offres-add.component.css']
})
export class OffresAddComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
 
  ngOnInit(): void {
  }
  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const offre: Offre = {id: uuid.v4(), depart: submittedForm.value.depart, destination: submittedForm.value.destination,date:submittedForm.value.date};
    this.store.dispatch(createOffre({offre}));

  }

}




  



  

