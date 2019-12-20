import { Injectable } from '@nestjs/common';
import { Sites } from '../../models/sites.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SitesService {

    constructor(@InjectModel('Site') private readonly siteModel: Model<Sites>) { }

    async create(payload): Promise<Sites> {
        const createdSite = new this.siteModel(payload);
        return await createdSite.save();
    }

    async findAll(skip: number, limit: number): Promise<Sites[]> {
        return await this.siteModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort('-createdOn')
            .exec();
    }

    async findOne(id: string): Promise<Sites> {
        return await this.siteModel
            .findOne({ _id: id })
            .exec();
    }

    async update(id: string, payload: Sites): Promise<Sites> {
        return await this.siteModel
            .findOneAndUpdate({ _id: id }, payload)
    }

    async delete(id: string): Promise<Sites> {
        return await this.siteModel
            .findOneAndDelete({ _id: id })
    }

    async updateRouter(id: string, payload: Sites): Promise<Sites> {
        return await this.siteModel
            .findOneAndUpdate(
                { _id: id },
                { $set: { router: payload } }
            )
    }

}
