import { OffreState } from './offre.reducers';
import { Offre } from '../models/offre.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './offre.reducers';

export const offreFeatureSelector = createFeatureSelector<OffreState>('offres');

export const getAllOffres = createSelector(
  offreFeatureSelector,
  selectAll
);

export const OffresareLoaded = createSelector(
  offreFeatureSelector,
 
  state => state.offresLoaded
);
export const getSearched = createSelector(
  offreFeatureSelector
  ,
  selectAll,
  state => state.offresSearched
);



