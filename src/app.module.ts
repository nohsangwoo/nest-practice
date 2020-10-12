import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  // controllers url을 호출(매핑)하고 request를 받고 query를 넘기거나  Body를 넘기거나 함수를 실행함
  controllers: [AppController],

  // providers에 생기는 서비스파일은 로직을 관리하는 역할을 가지게 됨
  // 어떠한 한개의 요소가 한가지 기능은 꼭 책임져야하는 약속이 있음
  // 이번엔 여기다 DB를 만들꺼임
  providers: [],
})
export class AppModule {}
