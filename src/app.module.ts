import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';


@Module({
  imports: [],
  // controllers url을 호출하고 함수를 실행함
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
