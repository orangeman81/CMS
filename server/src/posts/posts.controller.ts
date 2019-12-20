import { Controller, Get, Query, ParseIntPipe, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostsService } from '../providers/posts/posts.service';
import { Posts } from '../models/posts.interface';

@Controller('posts')
export class PostsController {

    constructor(private readonly posts: PostsService) { }

    @Get()
    async findAll(
        @Query('skip', new ParseIntPipe()) skip: number,
        @Query('limit', new ParseIntPipe()) limit: number,
        @Query('siteId') siteId: string
    ) {
        return await this.posts.findAll(skip, limit, siteId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.posts.findOne(id);
    }

    @Post()
    async create(@Body() payload: Posts) {
        return await this.posts.create(payload);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() payload: Posts
    ) {
        return await this.posts.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.posts.delete(id);
    }
}
