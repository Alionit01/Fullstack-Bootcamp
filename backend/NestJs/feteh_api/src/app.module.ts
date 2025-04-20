import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pak1stani12',
    database: 'nest_db',
    entities: [Users], // ✅ include all your entities
    synchronize: false, // ✅ set to false when using migrations
  }),UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
