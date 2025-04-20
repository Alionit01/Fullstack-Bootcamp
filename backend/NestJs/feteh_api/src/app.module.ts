import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'yourpassword',
    database: 'yourdb',
    entities: [Users], // ✅ include all your entities
    synchronize: false, // ✅ set to false when using migrations
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
