import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { Offer } from './entity/offer.entity';
import { OfferController } from './app.controller'; 
import { ExchangeRequest } from './entity/exchange-request.entity';
import { ExchangeRequestController } from './exchangeRequest/exchange-request.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pak1stani12',
      database: 'TitForTat',
      entities: [Offer, ExchangeRequest],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Offer]),
    JwtModule.register({
      secret: 'your_jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, OfferController, ExchangeRequestController],
  providers: [AppService],
})
export class AppModule {}
