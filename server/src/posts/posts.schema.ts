import * as mongoose from 'mongoose';

export const PostsSchema = new mongoose.Schema({
    title: String,
    shortDescription: String,
    longDescription: String,
    tags: [String],
    author: String,
    reference: String,
    imgUrl: String,
    imgDescription: String,
    publicationDate: String,
    hidden: Boolean,
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);