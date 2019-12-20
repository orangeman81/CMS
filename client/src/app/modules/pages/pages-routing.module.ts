import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MakeComponent } from './make/make.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: ":id",
        component: DetailsComponent
      },
      {
        path: "make",
        component: MakeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
