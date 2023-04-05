import movies from './schema';

export default class MovieService {
    
    public filterMovie(query: any, callback: any) {
        movies.findOne(query, callback);
    }

    public async getAll() {
        const result = await movies.find({});
        return result;
    }
}