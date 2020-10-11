#유효성 검사

1. main.ts app.useGlobalPipes(new ValidationPipe()); 설정
2. "class-transformer": "^0.3.1",
   "class-validator": "^0.12.2",
   설치
3. dto파일에서 import { IsString, IsNumber} from "class-validator" 선언후 사용
4. service파일과controller 파일에서 반환형식을 create(movieData:CreateMovieDto){ 이런식으로 지정해줌
