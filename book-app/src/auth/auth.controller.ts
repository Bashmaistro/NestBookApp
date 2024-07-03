import { Controller, Post,Body, HttpException, UseGuards, Req ,Get} from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './Guard/local.guard';
import { JwtAuthGuard } from './Guard/jwt.guard';
import { Request } from 'express';
import { log } from 'console';

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

   @Get('userStat')
   @UseGuards(JwtAuthGuard)
   async getUserStat(@Req() req: any){

    
    
    console.log(req.user._id);
    
    
   }


}
