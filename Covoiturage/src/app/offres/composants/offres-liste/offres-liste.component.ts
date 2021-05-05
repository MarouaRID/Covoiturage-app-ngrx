

import { getAllOffres } from './../../store/offre.selectors';
import {offreActions } from '.././../store/offre.actions';
import { AppState } from '../../../store/reducer/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offre } from '../../models/offre.model';
import { OffreService } from './../../services/offre.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-offres-liste',
  templateUrl: './offres-liste.component.html',
  styleUrls: ['./offres-liste.component.css']
})
export class OffresListeComponent implements OnInit {

  offres$: Observable<Offre[]>;

  offreMaj: Offre;

  isUpdateActivated = false;

  constructor(private service: OffreService, private store: Store<AppState>) { }

  ngOnInit() {
    this.offres$ = this.store.select(getAllOffres);
  }

  deleteOffre(Id: string) {
    this.store.dispatch(offreActions.deleteOffre({Id}));
  }

  showUpdateForm(offre: Offre) {
    this.offreMaj = {...offre};
    this.isUpdateActivated = true;
  }

  updateOffre(updateForm) {
    const update: Update<Offre> = {
      id: this.offreMaj.id,
      changes: {
        ...this.offreMaj,
        ...updateForm.value
      }
    };

    this.store.dispatch(offreActions.updateOffre({update}));

    this.isUpdateActivated = false;
    this.offreMaj = null;
}





  
}
