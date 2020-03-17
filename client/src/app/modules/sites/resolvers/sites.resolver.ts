import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Site } from 'src/app/shared/models/site';
import { DataService } from 'src/app/providers/data.service';
import { Observable, iif } from 'rxjs';
import { SitesStore } from 'src/app/store/sites/sitesStore';
import { switchMap, first } from 'rxjs/operators';

@Injectable()
export class SitesResolver implements Resolve<Site> {
    constructor(
        private data: DataService<Site>,
        private store: SitesStore
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Site> {

        const paramId: string = route.paramMap.get('id');
        const $findOne: Observable<Site> = this.store.$findOne(paramId);
        const $fetchDetails: Observable<Site> = this.data.$findOne('sites', paramId);
        console.log('%cresolver', 'background: black; color: white; padding: 4px;', paramId);
        return this.store.$select(['loaded'])
            .pipe(
                switchMap(
                    (loaded: boolean) =>
                        iif(() => loaded, $findOne, $fetchDetails)
                ),
                first()
            );
    }
}