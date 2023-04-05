import { Request, Response } from 'express';
import { mongoError, successResponse } from '../modules/common/service';
import MovieSerivce from '../modules/movies/service';

export class MovieController {

    private user_service: MovieSerivce = new MovieSerivce();

    public async getAll(req: Request, res: Response) {
        try {
            const result = await this.user_service.getAll();
            successResponse('get movies successfull', result, res);
        }
        catch(err) {
            console.log("err ", err);
            mongoError(err, res);
        }
    }
}