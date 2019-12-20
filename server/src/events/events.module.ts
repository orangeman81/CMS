import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from '../providers/events/events.service';
import { EventsSchema } from './events.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Event', schema: EventsSchema }])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule { }
