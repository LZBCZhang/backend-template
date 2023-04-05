"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    plot: String,
    genres: [String],
    year: Number,
    languages: [String],
    rated: String
});
exports.default = mongoose.model('movies', schema);
