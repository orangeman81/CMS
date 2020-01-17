import * as mongoose from 'mongoose';

export const PagesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: String,
    meta: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        keywords: String,
    },
    header: {
        title: { type: String, required: true },
        subtitle: String,
        calltoaction: String,
        heroUrl: String,
    },
    sections: [
        {
            header: { type: String, required: true },
            contents: [
                {
                    title: String,
                    description: { type: String, required: true },
                    imgUrl: String,
                    imgDescription: String
                }
            ]
        }
    ],
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});