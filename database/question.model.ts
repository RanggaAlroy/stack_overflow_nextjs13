import { Schema, models, model, Document } from "mongoose";

export interface Iquestion extends Document {
    title: string;
    explanation: string;
    tags: Schema.Types.ObjectId[];
    views: number;
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId;
    answers: Schema.Types.ObjectId[];
    createdAt: Date;
}

const QuestionsSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: [{type: Schema.Types.ObjectId, ref: 'tags'}],
    views: {type: Number, default: 0},
    upvotes: [{type: Schema.Types.ObjectId, ref: 'users'}],
    downvotes: [{type: Schema.Types.ObjectId, ref: 'users'}],
    author: {type: Schema.Types.ObjectId, ref: 'users'},
    answers: [{type: Schema.Types.ObjectId, ref: 'answers'}],
    createdAt: {type: Date, default: Date.now}
})

const Question = models.Question || model('Question', QuestionsSchema);

export default Question;