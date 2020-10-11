import { Body, Controller, Delete, Get, Param, Patch, Post, Query  } from '@nestjs/common';

// localhost:3000/movies 이런식으로 시작됨
@Controller('movies')
export class MoviesController {
    


    @Get()
    getAll(){
        return "This will return all movies";
    }

    
    // 파라미터를 가져오는 Get 밑에다 두면 search를 경로로 인식하지 않고 argument로 인식해버려서 최상위로 가져옴
    // Query는 get에서 전달받은 data 값을 가져올때 사용함
    // ex => http://localhost:3000/movies/search?year=2000   이경우에는 2000을 가져옴
    // http://localhost:3000/movies/search?year=2000&title=Tenet 이렇게 두개의 data값을 전달받아도 똑같은 방식으로 지정해둠
    @Get("search")
    search(@Query("year") searchingYear:string, @Query("title") searchingTitle:string){
        return `We are searching for a movie with a made after: ${searchingYear} ${searchingTitle? `and title : ${searchingTitle}` : ""}`
    }

    // localhost:3000/movies/1 이런식으로 값을 전달함 
    @Get(":paramId")
    // @Param("id") id라는 파라미터를 전달받아서 
    // string type의 id 라는 argument에 저장
    getOne(@Param("paramId") argId:string  ){
        return `This will return one movie with the id: ${argId}`
    }

    // Body의 내용을 받고싶을때
    // body안의 json 내용이 있다면 { name: 'Tenet', director: 'nolan' }  이렇게 가져와줌
    @Post()    
    create(@Body() movieData){        
        return movieData;
    }


    @Delete(":paramId")
    remove(@Param("paramId") movieId:string ){
        return `This will delete a movie with the id: ${movieId}`
    }

    // 리소스 전체를 업데이트 하려면 Put, 리소스 일부분만 업데이트 하려면 @Patch
    @Patch(":id")
    patch(@Param("id") movieId:string, @Body() updateData){
        return {
            updatedMovie:movieId,
            ...updateData
        }
    }

 

}
