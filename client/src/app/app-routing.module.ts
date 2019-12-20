import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MainComponent
  },
  {
    path: "sites",
    loadChildren: () => import('./modules/sites/sites.module').then(m => m.SitesModule)
  },
  {
    path: "pages",
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: "posts",
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: "events",
    loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule)
  },
  {
    path: "faq",
    component: MainComponent
  },
  {
    path: "error",
    component: MainComponent
  },
  {
    path: "**",
    redirectTo: "main"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
