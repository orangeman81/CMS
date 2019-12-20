import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { MakeComponent } from './make/make.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [MakeComponent, ListComponent, DetailsComponent, EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
