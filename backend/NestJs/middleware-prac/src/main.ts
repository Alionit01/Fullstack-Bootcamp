import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';

function globalMiddleware(req: Request, res: Response, next: NextFunction)
{
  console.log("Global Middleware") //to continue the process we have to use nest func
  next();
}



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
