'use server'
import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';

export async function createQuestion(params: any) {
// eslint-disable-next-line no-useless-catch
    try {
        connectToDatabase();

        const {title, content, tags, author, path} = params ;
        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDocuments = [];

        // create the tags or get the id they already exist

       for (const tag of tags) {
        const existingTag = await Tag.findByIdAndUpdate(
            { name: {$regex: new RegExp(`^${tag}$`, 'i')} },
            { $setOnInsert: {name: tag}, $push: {question: question._id} },
            { upsert: true, new: true }
        )
        
        tagDocuments.push(existingTag._id);

       }

        await Question.findByIdAndUpdate(question._id, {
        $push: {tags: {$each: tagDocuments }}    
        });
    } catch (error) {
        
    }
}