'use server'
import { connectToDatabase } from '../mongoose';

export async function createQuestion(params: any) {
// eslint-disable-next-line no-useless-catch
    try {
        connectToDatabase();
        
    } catch (error) {
        
    }
}