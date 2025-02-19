import mongoose from 'mongoose';

async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/node10");
    } catch (error) {
        console.log(`error to connect db ${error}`);
    }
}

export default connectDb;
