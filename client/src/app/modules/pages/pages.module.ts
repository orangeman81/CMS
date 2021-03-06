import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MakeComponent } from './make/make.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [MakeComponent, ListComponent, DetailsComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
