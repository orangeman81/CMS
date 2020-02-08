import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-router-form',
  templateUrl: './router-form.component.html',
  styleUrls: ['./router-form.component.scss']
})
export class RouterFormComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription();

  pageList: any[] = [
    {
      name: "homepage",
      _id: "1234455151551551"
    },
    {
      name: "products",
      _id: "4251425622114689"
    },
    {
      name: "features",
      _id: "1556322791449244"
    },
    {
      name: "contacts",
      _id: "2146515252441236"
    }
  ]

  get routes() {
    return this.routerForm.get('routes') as FormArray;
  }

  routerForm = this.fb.group({
    routes: this.fb.array([
      this.fb.group({
        page: this.fb.control({
          name: "homepage",
          _id: "1234455151551551"
        }),
        sections: this.fb.array([])
      })
    ])
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
    const subroute = (<FormArray>(<FormGroup>(<FormArray>this.routerForm.controls['routes'])
      .controls[i]).controls['sections']);
    console.log(i)
    if (action === true)
      subroute.push(this.fb.control(""));
    else
      subroute.removeAt(i);
  }

  ngOnInit() {
    this.sub = this.routerForm
      .valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        filter(() => this.routerForm.valid)
      )
      .subscribe(console.log)
  }

  ngOnDestroy() {
    this.sub ? this.sub.unsubscribe() : null;
  }

}