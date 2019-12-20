import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from '../providers/pages/pages.service';
import { PagesSchema } from './pages.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Page', schema: PagesSchema }])],
  controllers: [PagesController],
  providers: [PagesService]
})
export class PagesModule {}
