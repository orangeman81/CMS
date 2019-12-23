import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { MakeComponent } from './make/make.component';
import { PostsComponent } from './posts.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [DetailsComponent, ListComponent, MakeComponent, PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ComponentsModule
  ]
})
export class PostsModule { }
