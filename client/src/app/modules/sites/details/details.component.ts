import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/shared/models/site';
import { Observable, Subscription } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { DataService } from 'src/app/providers/data.service';
import { SitesStore } from 'src/app/store/sites/sitesStore';
import { FormGroup } from '@angular/forms';
import { Action } from 'src/app/store/core/action';
import { SitesActions } from 'src/app/store/sites/sitesActions.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public $details: Observable<Site>;
  private sub: Subscription = new Subscription();

  constructor(
    private router: ActivatedRoute,
    private data: DataService<Site>,
    private store: SitesStore,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.$details = this.router.data
      .pipe(
        pluck('details'),
        tap(console.log)
      );
  }

  public save(formValue: FormGroup) {
    const id: string = this.router.snapshot.params['id'];
    this.sub = this.data.$update('sites', id, formValue)
      .pipe(
        tap((site: Site) => this.store.dispatch(new Action(SitesActions.update, { id, item: site })))
      )
      .subscribe((site: Site) => this.openSnackBar("updated", site.name))
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.sub.closed || this.sub.unsubscribe();
  }

}
