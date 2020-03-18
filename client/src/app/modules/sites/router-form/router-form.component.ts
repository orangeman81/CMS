import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-router-form',
  templateUrl: './router-form.component.html',
  styleUrls: ['./router-form.component.scss']
})
export class RouterFormComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription();

  @Output()
  private $action: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  pageList: any[] = [
    {
      name: "homepage",
      pageId: "1234455151551551"
    },
    {
      name: "products",
      pageId: "4251425622114689"
    },
    {
      name: "features",
      pageId: "1556322791449244"
    },
    {
      name: "contacts",
      pageId: "2146515252441236"
    }
  ]

  get routes() {
    return this.routerForm.get('routes') as FormArray;
  }

  routerForm: FormGroup = this.fb.group({
    routes: this.fb.array([
      this.fb.group({
        page: this.fb.control(this.pageList[0]),
        sections: this.fb.array([])
      })
    ], Validators.required)
  })

  constructor(private fb: FormBuilder) { }

  addRoute() {
    this.routes.push(
      this.fb.group({
        page: this.fb.control(''),
        sections: this.fb.array([])
      })
    );
  }

  handleSubRoute(i: number, action: boolean) {
    const subroutes = (<FormArray>(<FormGroup>(<FormArray>this.routes)
      .controls[i]).controls['sections']);

    if (action === true)
      subroutes.push(this.fb.control(""));
    else
      subroutes.length > 0 ? subroutes.removeAt(subroutes.length - 1) : this.routes.removeAt(i);
  }

  ngOnInit() {
    this.sub = this.routerForm
      .valueChanges
      .pipe(
        debounceTime(1600),
        distinctUntilChanged((a, b) =>
          JSON.stringify(a) ===
          JSON.stringify(b)
        ),
        filter(() => this.routerForm.valid)
      )
      .subscribe((value: FormGroup) => this.$action.emit(value))
  }

  ngOnDestroy() {
    this.sub.closed || this.sub.unsubscribe();
  }

}