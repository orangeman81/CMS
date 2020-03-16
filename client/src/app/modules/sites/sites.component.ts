import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Site } from 'src/app/shared/models/site';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Action } from 'src/app/store/core/action';
import { SitesActions } from 'src/app/store/sites/sitesActions.enum';
import { SitesStore } from 'src/app/store/sites/sitesStore';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  constructor(
    private data: DataService<Site>,
    private store: SitesStore
  ) { }

  ngOnInit() {
    this.subscription = this.data.$find('sites?skip=0&limit=10')
      .pipe(
        filter(() => !this.store.state.loaded),
        tap((data: Site[]) => this.store.dispatch(new Action(SitesActions.loadStore, data)))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription || this.subscription.unsubscribe();
  }

}
