import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { bookDto } from "./bookdto/book.dto";
import { BookPipe } from "./bookpipe/book.pipe";


@Controller("book")
export class bookController {

    @Get("/:id")
    findBookById(@Param("id", ParseIntPipe) id: number): string{
        console.log(id, typeof(id));
        return "book by id";
    }

    @Post("/:add")
    addBook(@Body(new BookPipe()) book: bookDto): string{
      return "Add Book ";
    }
}
