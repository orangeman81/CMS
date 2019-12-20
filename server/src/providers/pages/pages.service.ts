import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pages } from '../../models/pages.interface';

@Injectable()
export class PagesService {

    constructor(@InjectModel('Page') private readonly pageModel: Model<Pages>) { }

    async create(payload): Promise<Pages> {
        const createdSite = new this.pageModel(payload);
        return await createdSite.save();
    }

    async findAll(skip: number, limit: number, siteId: string): Promise<Pages[]> {
        return await this.pageModel
            .find({
                siteId: siteId
            })
            .skip(skip)
            .limit(limit)
            .sort('-createdOn')
            .exec();
    }

    async findOne(id: string): Promise<Pages> {
        return await this.pageModel
            .findOne({ _id: id })
            .exec();
    }

    async update(id: string, payload: Pages): Promise<Pages> {
        return await this.pageModel
            .findOneAndUpdate({ _id: id }, payload)
    }

    async delete(id: string): Promise<Pages> {
        return await this.pageModel
            .findOneAndDelete({ _id: id })
    }
}
