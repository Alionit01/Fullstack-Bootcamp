import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {
    @Get()
    findAllBooks(): string{
        return "All books";
    }

    @Post()
    AddBook(): string{
        return "Adds book"
    }
}
