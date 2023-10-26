import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true); // to avoid deprecation warning

    if(!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB_URL')
    };

    if(isConnected) {
        return console.log('MongoDB is already connected')
    };

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
           dbName : 'devflow_rag'
        })

        isConnected = true;

        console.log('MongoDB is connected')
    } catch (error) {

        console.log('MongoDB connection failed', error)
        
    }

}