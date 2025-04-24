import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureOne } from './feature1.module';
import { FeatureTwo } from './feature2.module';

@Module({
  imports: [FeatureOne, FeatureTwo],
  controllers: [AppController],
  providers: [AppService],
})
export class OrderModule {
constructor(){
  console.log("OrderModule");
}
}