import { MovieController } from '../controllers/movieController';
import {Application, Request, Response } from 'express';


export class MovieRoutes {
    private movie_controller: MovieController = new MovieController();

   public route(app: Application) {
      app.get('/api/movies', async (req: Request, res: Response) => {
        return await this.movie_controller.getAll(req, res);
      });
      
   }
}