import { Component } from '@angular/core';
import { Site } from 'src/app/shared/models/site';
import { Observable } from 'rxjs';
import { SitesStore } from 'src/app/store/sites/sitesStore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  $data: Observable<Site[]> = this.store.$data;

  constructor(private store: SitesStore) { }

}
