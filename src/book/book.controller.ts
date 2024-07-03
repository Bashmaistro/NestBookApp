import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from 'src/auth/Guard/jwt.guard';
import { AuthService } from 'src/auth/auth.service';
import { UpdateUserDto } from 'src/auth/dto/update-auth.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService,
              private readonly authService:AuthService
  ) {}

  @Post("create")
  @UseGuards(JwtAuthGuard)
  create(@Body() createBookDto: CreateBookDto , @Req() req: any) {
    createBookDto.author = req.user.username;
    return this.bookService.create(createBookDto);
  }
  @Get('list')
  listed(){
    return this.bookService.findAll();
  }

  @Post('favorite')
  @UseGuards(JwtAuthGuard)
  async addFavorite(@Req() req: any , @Body('bookname') bookname: String){

    const book = await this.bookService.findOneByName(bookname);

    return await this.authService.addFavorite(req.user._id , book);
    
  }

  @Get('list/favorites')
  @UseGuards(JwtAuthGuard)
  async getFavorites(@Req() req:any){

    return await this.authService.findOne(req.user._id);
    

  }
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
