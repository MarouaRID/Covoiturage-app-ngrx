import { OffresAddComponent } from './offres/composants/offres-add/offres-add.component';

import { OffresListeComponent } from './offres/composants/offres-liste/offres-liste.component';
import { EffectsModule } from '@ngrx/effects';
import { OffresModule } from './offres/offres.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from '../app/store/reducer/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import{OffresSearchComponent} from '../app/offres/composants/offres-search/offres-search.component';

const routes = [

  {  path: 'offres',
    component: OffresListeComponent,
    
  },
  {
    path:'search',component:OffresSearchComponent
  },
  {path: 'create-offre', component: OffresAddComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    
    BrowserModule,
    OffresModule,
   
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
