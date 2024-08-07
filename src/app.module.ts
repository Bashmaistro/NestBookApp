import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [AuthModule, BookModule,
    MongooseModule.forRoot('mongodb://localhost:27017/bookApp'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
