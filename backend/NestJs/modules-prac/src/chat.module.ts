import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureThree } from './feature3.module';

@Module({
  imports: [FeatureThree],
  controllers: [AppController],
  providers: [AppService],
})
export class ChatModule {
constructor(){
  console.log("ChatMoudule");
}
}