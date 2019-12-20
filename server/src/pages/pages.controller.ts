import { Controller, Get, ParseIntPipe, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PagesService } from '../providers/pages/pages.service';
import { Pages } from '../models/pages.interface';

@Controller('pages')
export class PagesController {

    constructor(private readonly pages: PagesService) { }

    @Get()
    async findAll(
        @Query('skip', new ParseIntPipe()) skip: number,
        @Query('limit', new ParseIntPipe()) limit: number,
        @Query('siteId') siteId: string
    ) {
        return await this.pages.findAll(skip, limit, siteId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.pages.findOne(id);
    }

    @Post()
    async create(@Body() payload: Pages) {
        return await this.pages.create(payload);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() payload: Pages
    ) {
        return await this.pages.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.pages.delete(id);
    }
}
