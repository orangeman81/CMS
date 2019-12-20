import * as mongoose from 'mongoose';

export const SitesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    meta: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        keywords: String,
    },
    router: [
        {
            path: String,
            icon: String,
            pageId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Page',
                required: true
            },
            sections: [{
                path: String,
                icon: String,
                pageId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Page',
                    required: true
                }
            }]
        }
    ],
    footer: {
        title: { type: String, required: true },
        address: String,
        phone: String,
        email: String,
        copyright: { type: String, required: true },
    }
}, {
    versionKey: false
});