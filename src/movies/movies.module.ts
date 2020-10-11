import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    // dependency injection     
    // providers의 MoviesService Type을 Controllers가 자동으로 인식하여서 사용할수있음 (nestjs가 해주는 기능)
    controllers:[MoviesController],
    providers:[MoviesService],
})
export class MoviesModule {}
