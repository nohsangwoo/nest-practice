#유효성 검사

1. main.ts app.useGlobalPipes(new ValidationPipe()); 설정
2. "class-transformer": "^0.3.1",
   "class-validator": "^0.12.2",
   설치
3. dto파일에서 import { IsString, IsNumber} from "class-validator" 선언후 사용
4. service파일과controller 파일에서 반환형식을 create(movieData:CreateMovieDto){ 이런식으로 지정해줌

<!-- main module파일에선 정말 중요한 것만 controller와 service를 사용함 아니면 movie를 따로 import해서 사용(componets를 나눠서 index.js로 호출하는것과 같음) -->

5. app.module.ts에서 module을 생성한뒤 movies 폴더안에 app.module.ts에서 contller 와 service를 참조한다.
