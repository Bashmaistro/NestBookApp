import { Module } from '@nestjs/common';
import { BookController } from 'src/controllers/book/book.controller';
import { BookService } from 'src/service/book/book.service';
import { MongooseModule} from "@nestjs/mongoose";
import { Book, BookSchema } from 'src/schemas/book.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Book.name,
            schema: BookSchema

        }])
    ],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule {}
