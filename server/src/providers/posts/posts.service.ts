import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from '../../models/posts.interface';

@Injectable()
export class PostsService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) { }

    async create(payload): Promise<Posts> {
        const createdSite = new this.postModel(payload);
        return await createdSite.save();
    }

    async findAll(skip: number, limit: number, siteId: string): Promise<Posts[]> {
        return await this.postModel
            .find({
                siteId: siteId
            })
            .skip(skip)
            .limit(limit)
            .sort('-createdOn')
            .exec();
    }

    async findOne(id: string): Promise<Posts> {
        return await this.postModel
            .findOne({ _id: id })
            .exec();
    }

    async update(id: string, payload: Posts): Promise<Posts> {
        return await this.postModel
            .findOneAndUpdate({ _id: id }, payload)
    }

    async delete(id: string): Promise<Posts> {
        return await this.postModel
            .findOneAndDelete({ _id: id })
    }
}
