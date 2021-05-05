import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffresListeComponent } from './composants/offres-liste/offres-liste.component';
import { OffresAddComponent } from './composants/offres-add/offres-add.component';
import { FormsModule } from '@angular/forms';
import{OffreService} from './services/offre.service'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import{offreReducer} from '../offres/store/offre.reducers';
import{OffreEffects} from '../offres/store/offre.effects';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { OffresSearchComponent } from './composants/offres-search/offres-search.component';

@NgModule({
  declarations: [
    
    OffresListeComponent,
    OffresAddComponent,
    OffresSearchComponent,
    
  ],
 
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('offres', offreReducer),
    EffectsModule.forFeature([OffreEffects]),

   HttpClientInMemoryWebApiModule .forRoot(
      DataService, { dataEncapsulation: false,passThruUnknownUrl: true }
    )

  ],
  providers: [OffreService],
  bootstrap:[],
  exports:[OffresListeComponent,OffresAddComponent]
})
export class OffresModule { }
