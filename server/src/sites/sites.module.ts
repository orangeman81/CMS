import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesSchema } from './sites.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SitesService } from '../providers/sites/sites.service';
import { PagesSchema } from '../pages/pages.schema';
import { PostsSchema } from '../posts/posts.schema';
import { EventsSchema } from '../events/events.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Site', schema: SitesSchema },
    { name: 'Page', schema: PagesSchema },
    { name: 'Post', schema: PostsSchema },
    { name: 'Event', schema: EventsSchema }
  ])],
  controllers: [SitesController],
  providers: [SitesService]
})
export class SitesModule { }
