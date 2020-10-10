import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

// localhost:3000/movies 이런식으로 시작됨
@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    // localhost:3000/movies/1 이런식으로 값을 전달함 
    @Get("/:paramId")
    // @Param("id") id라는 파라미터를 전달받아서 
    // string type의 id 라는 argument에 저장
    getOne(@Param("paramId") argId:string  ){
        return `This will return one movie with the id ${argId}`
    }

    @Post()
    create(){
        return "This will create a movie"
    }


    @Delete("/:paramId")
    remove(@Param("paramId") movieId:string ){
        return `This will delete a movie with the id: ${movieId}`
    }

    // 리소스 전체를 업데이트 하려면 Put, 리소스 일부분만 업데이트 하려면 @Patch
    @Patch("/:id")
    patch(@Param("id") movieId:string){
        return `This will patch a movie with the id: ${movieId}`
    }

}
