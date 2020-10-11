import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import {Movie} from "./entities/movie.entity"
@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    // private class의 movies를 호출해주는 함수

    
    getAll():Movie[]{
        const movies = this.movies;
        if(movies.length<=0){
            throw new NotFoundException("Moive list is empty");
        }else{
            return this.movies;
        }
    }

    //   app.useGlobalPipes(new ValidationPipe({transform:true}) 이 설정 덕분에 자동으로 movieId를 string 에서 number형식으로 변환해줌
    getOne(id:number): Movie{
        const movies = this.movies;
        if(movies.length<=0){
            throw new NotFoundException("Movies data is empty")            
        }
        // +id  === parseInd(id) 랑 같은 기능을함  string type을 number type으로 변환해줌        
        const getMovieData = movies.find(movie=>movie.id === id);
        if(!getMovieData){
            // nestJS가 제공하는 예외처리기
            throw new NotFoundException(`not found Movie with ID : ${id}`)
        }else{
            return getMovieData;
        }
    }

    
        
        deleteOne(id: number) {
        // getOne에 만들어둔 예외 처리기를 이용해줘서 지우고자 하는 moviId가 존재하지 않으면 에러 처리하고
        // movieId가 존재한다면 delete 처리 정상 진행 
        this.getOne(id);
        // movies Array에 filter의 내용을 덮어씌움
        this.movies = this.movies.filter(movie => movie.id !== id);
      }

    //  전달되는 movieData값 형식은 CreateMovieDto 형식이다
    create(movieData:CreateMovieDto){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }

    update(id:number, updateData){
        // updata하려는 대상의 id가 없거나 moviesdata가 없으면 에러 발생시키기위해 getOne을 이용함
        // 일단 찾은 movie data(obj)를 movie라는 변수에 저장하고
        const movie = this.getOne(id);        
        // 그다음 일단 movies array에있는 data에서 지워줌 (fake DB라 이렇게 할수밖에없음)
        this.deleteOne(id);        
        // 저장된 movie의 data와 updateData를  spead 시켜서 합쳐줌
        this.movies.push({...movie,...updateData})
    }
}
