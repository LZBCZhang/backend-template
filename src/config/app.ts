import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';

import { MovieRoutes } from "../routes/movie_routes";

class App {
   public app: express.Application;
   public mongoUrl: string = 'mongodb+srv://secretKey@cluster1.kkc7y.mongodb.net/?retryWrites=true&w=majority';

   private movies_routes: MovieRoutes = new MovieRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();

      this.movies_routes.route(this.app);
   }
    
   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
    mongoose.connect(this.mongoUrl);
   }
}
export default new App().app;
