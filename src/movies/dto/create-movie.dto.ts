// dto : data transform object type => 전달되는 변수형식을 지정해줌
import { IsString, IsNumber} from "class-validator"

export class CreateMovieDto{ 
    @IsString()    
    readonly title:string;
    @IsNumber()
    readonly year:number;
    // each:true 모든요소를 하나하나 유효성 검사함 (배열이라서 이렇게 옵션줌)
    @IsString({each:true})
    readonly genres:string[];

}