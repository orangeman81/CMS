import { Injectable } from "@angular/core";
import { Store } from '../core/store';
import { sitesReducer } from './sitesReducer';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { SitesState } from './sitesState';

@Injectable()
export class SitesStore extends Store<SitesState> {

    constructor() {
        const initialState: SitesState = {
            data: [],
            loaded: false,
            query: ""
        };
        super(initialState, sitesReducer)
    };

    public get $data() {
        return this.$state.pipe(
            pluck('data'),
            distinctUntilChanged()
        )
    }
}