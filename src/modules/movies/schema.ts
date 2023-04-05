import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    plot: String,
    genres: [String],
    year: Number,
    languages: [String],
    rated: String
});

export default mongoose.model('movies', schema);