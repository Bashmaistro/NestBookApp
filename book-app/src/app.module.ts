import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,BookModule ,
    MongooseModule.forRoot('mongodb://localhost:27017/bookApp'), AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
