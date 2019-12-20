import * as mongoose from 'mongoose';

export const EventsSchema = new mongoose.Schema({
    title: String,
    keywords: String,
    shortDescription: String,
    longDescription: String,
    location: String,
    reference: String,
    imgUrl: String,
    imgDescription: String,
    publicationDate: String,
    startDate: String,
    endDate: String,
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