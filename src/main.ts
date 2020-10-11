import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    // 지정된 변수가 아니면 request에 도달하지 못하게함
    forbidNonWhitelisted:true,
    // 전달된 변수의 type을 변환해 주는 기능 예를들면 string=> integer  이런식으로 변환 해줌
    transform:true,
  }));
  await app.listen(3000);
}
bootstrap();
