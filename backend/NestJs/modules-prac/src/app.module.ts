import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [ UserModule, OrderModule, ChatModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
constructor(){
  console.log("AppMoudule");
}
}