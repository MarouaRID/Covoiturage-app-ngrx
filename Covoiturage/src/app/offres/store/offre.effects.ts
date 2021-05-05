import { offreActions, offresLoaded, updateOffre } from './offre.actions';
import{OffreService} from '../services/offre.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OffreEffects {

  loadOffres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActions.loadOffres),
      concatMap(() => this.service.getAllOffres()),
      map(offres => offreActions.offresLoaded({offres}))
    )
  );
  SearchOffres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActions.searchOffresAction),
      concatMap((action) => this.service.searchOffre(action.depart,action.destination)),
      map(offres => offreActions.searchOffresSucces({offres}))
    )
  );

  createOffre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActions.createOffre),
      concatMap((action) => this.service.createOffre(action.offre)),
      tap(() => this.router.navigateByUrl('/offres'))
    ),
    {dispatch: false}
  );

  deleteOffre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActions.deleteOffre),
      concatMap((action) => this.service.deleteOffre(action.Id))
    ),
    {dispatch: false}
  );

  updateOffres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActions.updateOffre),
      concatMap((action) => this.service.updateOffre(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private service: OffreService, private actions$: Actions, private router: Router) {}
}
