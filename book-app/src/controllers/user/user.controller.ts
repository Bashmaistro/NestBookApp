import { Controller, Post,Body, UseGuards,Req } from '@nestjs/common';
import { CreateBookDto } from 'src/Dtos/CreateBookDto';

import { CreateUserDto } from 'src/Dtos/CreateUserDto';
import { UpdateBookDto } from 'src/Dtos/UpdateBookDto';
import { JwtAuthGuard } from 'src/auth/Guard/jwt.guard';
import { BookService } from 'src/service/book/book.service';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userServicer: UserService,
        private bookServicer : BookService
    ){

    }


    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userServicer.createuser(createUserDto);
    }

    @Post('add-favorite')
    @UseGuards(JwtAuthGuard)
    async addFavorite(@Body() updateBookDto : UpdateBookDto , @Req() req : any){

        const book = await this.bookServicer.findByName(updateBookDto.bookName);

        return this.userServicer.updateBook(book , req.user._id)
        

        

    }

    
}
