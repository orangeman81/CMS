import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MakeComponent } from './make/make.component';
import { SitesComponent } from './sites.component';
import { SitesResolver } from './resolvers/sites.resolver';

const routes: Routes = [
  {
    path: "",
    component: SitesComponent,
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: "details/:id",
        component: DetailsComponent,
        resolve: {
          details: SitesResolver
        }
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
export class SitesRoutingModule { }
