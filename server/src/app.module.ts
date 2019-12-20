import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { PagesModule } from './pages/pages.module';
import { PostsModule } from './posts/posts.module';
import { EventsModule } from './events/events.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SitesModule,
    PagesModule,
    PostsModule,
    EventsModule,
    MongooseModule.forRoot('mongodb+srv://stefanoImparato:madwolf1981@cluster0-fj9cw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
