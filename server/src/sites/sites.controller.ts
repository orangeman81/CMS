import { Controller, Get, Param, Post, Body, Put, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { SitesService } from '../providers/sites/sites.service';
import { Sites } from '../models/sites.interface';

@Controller('sites')
export class SitesController {

    constructor(private readonly sites: SitesService) { }

    @Get()
    async findAll(
        @Query('skip', ParseIntPipe) skip,
        @Query('limit', ParseIntPipe) limit
    ) {
        return await this.sites.findAll(skip, limit);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.sites.findOne(id);
    }

    @Post()
    async create(@Body() payload: Sites) {
        return await this.sites.create(payload);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() payload: Sites
    ) {
        return await this.sites.update(id, payload);
    }

    @Put('router/:id')
    async updateRouter(
        @Param('id') id: string,
        @Body() payload: Sites
    ) {
        return await this.sites.updateRouter(id, payload);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.sites.delete(id);
    }

}
