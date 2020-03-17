import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/shared/models/site';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public $details: Observable<Site>;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.$details = this.router.data
      .pipe(
        pluck('details'),
        tap(console.log)
      );
  }

  public save(value) {
    console.log(value);
  }

}
