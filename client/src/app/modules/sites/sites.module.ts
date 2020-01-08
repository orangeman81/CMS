import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MakeComponent } from './make/make.component';
import { SitesComponent } from './sites.component';
import { ComponentsModule } from '../components/components.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SitesFormComponent } from './sites-form/sites-form.component';
import { RouterFormComponent } from './router-form/router-form.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, MakeComponent, SitesComponent, SitesFormComponent, RouterFormComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ComponentsModule,
    MatTabsModule
  ]
})
export class SitesModule { }
