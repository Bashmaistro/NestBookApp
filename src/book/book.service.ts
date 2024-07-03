import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/Book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  

  constructor(@InjectModel(Book.name) private bookModel: Model<Book>){}

  async create(createBookDto: CreateBookDto) {

    const book = new this.bookModel(createBookDto);
    const savedBook = await book.save();
    return savedBook.toObject();
  }
  async findOneByName(bookname: String) {
    const book =  await this.bookModel.findOne({bookName: bookname})

    return book;
    }
  

  findAll() {
    return this.bookModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
