import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [UserModule,BookModule , 
    MongooseModule.forRoot('mongodb://localhost:27017/bookApp')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
