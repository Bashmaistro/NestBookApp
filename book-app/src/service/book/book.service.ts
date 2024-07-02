import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Book } from 'src/schemas/book.schema';
import {Model} from 'mongoose';
import { CreateBookDto } from 'src/Dtos/CreateBookDto';

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>){}

    async createBook(createBookDto: CreateBookDto){

        const newBook = new this.bookModel(createBookDto);
        return await newBook.save();
    }

    async getAllBooks(){
        
        return await this.bookModel.find()
    }

   




}
