
import { Module } from '@nestjs/common';
import { bookController } from './book.controller'; 


@Module({
  imports: [],
  controllers: [bookController],
  providers: [],
})
export class BookModule {}