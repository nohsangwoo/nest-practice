#유효성 검사

1. main.ts app.useGlobalPipes(new ValidationPipe()); 설정
2. "class-transformer": "^0.3.1",
   "class-validator": "^0.12.2",
   설치
3. dto파일에서 import { IsString, IsNumber} from "class-validator" 선언후 사용
4. service파일과controller 파일에서 반환형식을 create(movieData:CreateMovieDto){ 이런식으로 지정해줌

<!-- main module파일에선 정말 중요한 것만 controller와 service를 사용함 아니면 movie를 따로 import해서 사용(componets를 나눠서 index.js로 호출하는것과 같음) -->

5. app.module.ts에서 module을 생성한뒤 movies 폴더안에 app.module.ts에서 contller 와 service를 참조한다.
6. 테스트의 목적 이상은 없는지 해당 파일을 테스트하는데 걸리는시간은 얼마나 걸리는지
7. unit testing과 e2e(end to end) testing

- unit testing : 단위 테스팅, 어느 한 부분만(작은 일부분) 테스트 하고싶을때 사용
- e2e testing : 모든것을 전부 테스트 하고싶을때 사용 (사용자가 취할만한 액션들을 처음부터 끝까지 테스트함 ex) 링크를 클릭했을때 잘 작동하는지, 무엇인가 사용자가 작동시켰을때 해당 작업이 잘 작동하는지까지 모든 기능을 테스트함)

8. Jest라는 툴로 테스트
