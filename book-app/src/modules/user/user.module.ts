import { Module,forwardRef } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/service/user/user.service';
import { MongooseModule} from "@nestjs/mongoose";
import { User, UserSchema } from 'src/schemas/User.schema';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { BookModule } from '../book/book.module';


@Module({
    imports: [forwardRef(() => AuthModule),forwardRef(() => BookModule),
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema

        }])
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [ UserService]
    
})
export class UserModule {}
