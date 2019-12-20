import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from '../providers/posts/posts.service';
import { PostsSchema } from './posts.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostsSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
