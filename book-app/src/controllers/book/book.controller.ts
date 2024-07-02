import { Controller, Post , Body, UsePipes, ValidationPipe,Get} from '@nestjs/common';
import { CreateBookDto } from 'src/Dtos/CreateBookDto';

import { BookService } from 'src/service/book/book.service';

@Controller('books')
export class BookController {

    constructor(private booksService: BookService ){

    }


    @Post()
    @UsePipes(new ValidationPipe())
    createUser( @Body() createBookDto: CreateBookDto){

        console.log(createBookDto);
        
        return this.booksService.createBook(createBookDto);
        
    }

    @Get()
    gelAllBooks(){
        return this.booksService.getAllBooks();
    }
}
