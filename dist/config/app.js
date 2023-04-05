"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movie_routes_1 = require("../routes/movie_routes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb+srv://li1113:Zouzou%401113@cluster1.kkc5y.mongodb.net/?retryWrites=true&w=majority';
        this.movies_routes = new movie_routes_1.MovieRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.movies_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
