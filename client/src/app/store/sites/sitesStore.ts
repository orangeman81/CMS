import { Injectable } from "@angular/core";
import { Store } from '../core/store';
import { sitesReducer } from './sitesReducer';
import { SitesState } from './sitesState';
import { Site } from 'src/app/shared/models/site';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SitesStore extends Store<SitesState> {
    constructor() {
        const initialState: SitesState = {
            data: [],
            query: "",
            page: 0,
            loaded: false
        };
        super(initialState, sitesReducer)
    };

    $findOne(id: string): Observable<Site> {
        return this.$select(['data'])
            .pipe(
                map(
                    (sites: Site[]) =>
                        sites.find((site: Site) => site._id === id)
                )
            )
    }
}