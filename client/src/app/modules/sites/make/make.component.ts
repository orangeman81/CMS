import { Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Site } from 'src/app/shared/models/site';
import { SitesStore } from 'src/app/store/sites/sitesStore';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Action } from 'src/app/store/core/action';
import { SitesActions } from 'src/app/store/sites/sitesActions.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private data: DataService<Site>,
    private store: SitesStore,
    private _snackBar: MatSnackBar
  ) { }

  public $save(formValue: FormGroup) {
    this.subscription = this.data.$add('sites', formValue)
      .subscribe((site: Site) => {
        this.store.dispatch(new Action(SitesActions.add, site));
        this.openSnackBar('added', site.name);
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.subscription.closed || this.subscription.unsubscribe();
  }

}