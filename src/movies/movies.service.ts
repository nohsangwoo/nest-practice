import { Injectable } from '@nestjs/common';
import {Movie} from "./entities/movie.entity"
@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    // private class의 movies를 호출해주는 함수

    
    getAll():Movie[]{
        return this.movies;
    }


    getOne(id:string): Movie{
        // +id  === parseInd(id) 랑 같은 기능을함  string type을 number type으로 변환해줌
        return this.movies.find(movie=>movie.id === +id)

    }

    deleteOne(id:string): boolean{
        this.movies.filter(movie=> movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }
}
