import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-router-form',
  templateUrl: './router-form.component.html',
  styleUrls: ['./router-form.component.scss']
})
export class RouterFormComponent implements OnInit {

  pages: any[] = [
    {
      name: "homepage",
      _id: "1234455151551551"
    },
    {
      name: "section",
      _id: "4251425622114689"
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
      this.fb.control({})
    ])
  })

  constructor(private fb: FormBuilder) { }

  addRoute() {
    this.routes.push(
      this.fb.control({})
    );
    console.log(this.routerForm.value)
  }

  addSubRoute(i: number) {
    this.routes
      .controls[i]
      .setValue({
        ...this.routes.controls[i].value,
        sections: this.fb.array([''])
      })
    console.log(this.routes.controls[i]['sections'])
  }

  ngOnInit() {
  }

}
