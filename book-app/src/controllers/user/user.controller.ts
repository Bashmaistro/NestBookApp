import { Controller, Post,Body } from '@nestjs/common';
import { CreateBookDto } from 'src/Dtos/CreateBookDto';

import { CreateUserDto } from 'src/Dtos/CreateUserDto';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userServicer: UserService){

    }


    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userServicer.createuser(createUserDto);
    }


    
}
