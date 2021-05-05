import { Offre } from '../models/offre.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { offreActions, offresLoaded } from './offre.actions';

export interface OffreState extends EntityState<Offre> {
  offresLoaded: boolean;
  offresSearched:boolean;
}

export const adapter: EntityAdapter<Offre> = createEntityAdapter<Offre>();

export const initialState = adapter.getInitialState({
  offresLoaded: true,
  offresSearched:true
});

export const offreReducer = createReducer(
  initialState,

  on(offreActions.offresLoaded, (state, action) => {
    return adapter.addMany(
      action.offres,
      {...state, offresLoaded: true}
    );
  }),
  on(offreActions.searchOffresSucces, (state, action) => {
    return adapter.addMany(
      action.offres,
      {...state, offresSearched: true}
    );
  }),
 

  on(offreActions.createOffre, (state, action) => {
    return adapter.addOne(action.offre, state);
  }),

  on(offreActions.deleteOffre, (state, action) => {
    return adapter.removeOne(action.Id, state);
  }),

  on(offreActions.updateOffre, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
