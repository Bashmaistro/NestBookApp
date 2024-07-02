import { Controller, Post,Body, HttpException, UseGuards } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './Guard/local.guard';

@Controller('login')
export class AuthController {

    constructor(private authService: AuthService ){

    }

   @Post()
   @UseGuards(LocalGuard)
   async login(@Body() authPayload : AuthDto){

    const token = await this.authService.validateUser(authPayload);
    
    return token
    
   }


}
