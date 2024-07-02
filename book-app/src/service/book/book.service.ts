import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Book } from 'src/schemas/book.schema';
import {Model} from 'mongoose';

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModule: Model<Book>){}
}
