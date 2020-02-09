import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  sub: Subscription;
  queryForm = new FormGroup({
    query: new FormControl(''),
  });

  get query() {
    return this.queryForm.get('query').value;
  }
  set query(val: string) {
    this.queryForm.get('query').setValue(val);
  }

  reset() {
    this.query = "";
  }

  @Input()
  param: string = "title";

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.sub = this.queryForm.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        map(form => {
          let queryParams: string = "";
          console.log(form)
          if (form.query != "") {
            queryParams = queryParams + `&${this.param}=${form.query}`
          }
          return queryParams;
        })
      )
      .subscribe(query => this.search.emit(query))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
