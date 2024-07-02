import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/service/user/user.service';
import { MongooseModule} from "@nestjs/mongoose";
import { User, UserSchema } from 'src/schemas/User.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema

        }])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
