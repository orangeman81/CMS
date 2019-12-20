import { Injectable } from '@nestjs/common';
import { Events } from '../../models/events.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventsService {

    constructor(@InjectModel('Event') private readonly eventModel: Model<Events>) { }

    async create(payload): Promise<Events> {
        const createdSite = new this.eventModel(payload);
        return await createdSite.save();
    }

    async findAll(skip: number, limit: number): Promise<Events[]> {
        return await this.eventModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort('-createdOn')
            .exec();
    }

    async findOne(id: string): Promise<Events> {
        return await this.eventModel
            .findOne({ _id: id })
            .exec();
    }

    async update(id: string, payload: Events): Promise<Events> {
        return await this.eventModel
            .findOneAndUpdate({ _id: id }, payload)
    }

    async delete(id: string): Promise<Events> {
        return await this.eventModel
            .findOneAndDelete({ _id: id })
    }

}
