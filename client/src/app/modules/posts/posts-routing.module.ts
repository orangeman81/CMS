import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MakeComponent } from './make/make.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
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
export class PostsRoutingModule { }
