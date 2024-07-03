import { Controller, Post , Body, UsePipes, ValidationPipe,Get, UseGuards, Req} from '@nestjs/common';
import { CreateBookDto } from 'src/Dtos/CreateBookDto';
import { JwtAuthGuard } from 'src/auth/Guard/jwt.guard';

import { BookService } from 'src/service/book/book.service';

@Controller('books')
export class BookController {

    constructor(private booksService: BookService ){

    }


    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(JwtAuthGuard)
    createUser( @Body() createBookDto: CreateBookDto, @Req() req : any){


        createBookDto.author = req.user.username;
        console.log(createBookDto);
        
        return this.booksService.createBook(createBookDto);
        
    }

    @Get()
    gelAllBooks(){
        return this.booksService.getAllBooks();
    }
}
