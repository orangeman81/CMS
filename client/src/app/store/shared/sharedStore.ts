import { Injectable } from "@angular/core";
import { Store } from '../core/store';
import { SharedState } from './sharedState';
import { sharedReducer } from './sharedReducer';

@Injectable({
    providedIn: 'root'
})
export class SitesStore extends Store<SharedState> {
    constructor() {
        const initialState: SharedState = {
            siteId: ""
        };
        super(initialState, sharedReducer)
    };
}