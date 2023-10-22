import {Schema, model, models, Document} from 'mongoose';

export interface IUser extends Document {
    clerckId: Schema.Types.ObjectId;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    picture?: string;
    location?: string;
    portfolioWebsite?: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;
}

const UserSchema = new Schema({
    clerckId: {type: Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true,unique: true},
    password: {type: String},
    bio: {type: String},
    picture: {type: String},
    location: {type: String},
    portfolioWebsite: {type: String},
    reputation: {type: Number, default: 0},
    saved: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    joinedAt: {type: Date,default: Date.now}
});

const User = models.User || model('User', UserSchema);

export default User;