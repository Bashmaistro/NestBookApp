import { Module,forwardRef } from '@nestjs/common';
import { BookController } from 'src/controllers/book/book.controller';
import { BookService } from 'src/service/book/book.service';
import { MongooseModule} from "@nestjs/mongoose";
import { Book, BookSchema } from 'src/schemas/book.schema';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { JwtAuthGuard } from 'src/auth/Guard/jwt.guard';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [AuthModule,forwardRef(() => UserModule),
        MongooseModule.forFeature([{
            name: Book.name,
            schema: BookSchema

        }])
    ],
    controllers: [BookController],
    providers: [BookService ],
    exports: [BookService],
})
export class BookModule {}
