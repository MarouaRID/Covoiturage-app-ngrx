import { Offre } from '../models/offre.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadOffres = createAction(
  '[Offres Liste] Load Offres depuis Service',
);
export const offresLoaded = createAction(
  '[Offres searched] Load Offres searched depuis Service',  props<{offres: Offre[]}>()
);
export const searchOffresAction=createAction(
  '[Search Offres] Offres searched',
  props<{depart:string,destination:string}>()
);
export const searchOffresSucces = createAction(
  '[Offres Effect] Offres Loaded Successfully',
  props<{offres: Offre[]}>()
);

export const createOffre = createAction(
  '[Create Offre Component] Create Offre',
  props<{offre: Offre}>()
);

export const deleteOffre= createAction(
  '[Offres List Operations] Delete Offre',
  props<{Id: string}>()
);

export const updateOffre = createAction(
  '[Offres List Operations] Update Offre',
  props<{update: Update<Offre>}>()
);

export const offreActions = {
  loadOffres,
  offresLoaded,
  createOffre,
  deleteOffre,
  updateOffre,
  searchOffresAction,
  searchOffresSucces
};


