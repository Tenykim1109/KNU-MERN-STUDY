import mongoose from 'mongoose';

const URL = 'mongodb+srv://knutalk:JcaMtbgEgFK22MW8@cluster0.qe2tv.mongodb.net/knutalk?retryWrites=true&w=majority'

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

export default db;