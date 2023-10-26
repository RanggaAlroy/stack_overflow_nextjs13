'use server'
import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';
import { CreateQuestionParams, GetQuestionsParams } from './shared.types';
import  User  from '@/database/user.model';
import { revalidatePath } from 'next/cache';

export async function getQuestions(params: GetQuestionsParams) {
    try {
        connectToDatabase();
        const questions = await Question.find({})
        .populate({path: 'tags', model: Tag})
        .populate({path: 'author', model: User})
        .sort({createdAt: -1})

        return {questions}

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createQuestion(params: CreateQuestionParams) {
// eslint-disable-next-line no-useless-catch
    try {
        connectToDatabase();

        const {title, content, tags, author, path} = params ;

        // create the question
        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDocuments = [];

        // create the tags or get the id they already exist

       for (const tag of tags) {
        const existingTag = await Tag.findByIdAndUpdate(
            { name: {$regex: new RegExp(`^${tag}$`, "i")} },
            { $setOnInsert: {name: tag}, $push: {question: question._id} },
            { upsert: true, new: true }
        )
        
        tagDocuments.push(existingTag._id);

       }

        await Question.findByIdAndUpdate(question._id, {
        $push: {tags: {$each: tagDocuments }}    
        });

        // create an interaction record for the user's ask_question action 

        // increment author reputatiomn by 5+ for creating a question

        revalidatePath(path);
    } catch (error) {
        
    }
}