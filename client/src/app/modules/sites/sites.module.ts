import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MakeComponent } from './make/make.component';
import { SitesComponent } from './sites.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [ListComponent, DetailsComponent, MakeComponent, SitesComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ComponentsModule
  ]
})
export class SitesModule { }
