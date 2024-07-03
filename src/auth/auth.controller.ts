import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';

import { AuthDto } from './dto/auth.dto';
import { UseGuards } from '@nestjs/common';
import { LocalGuard } from './Guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign')
  async create(@Body() createAuthDto: CreateUserDto) {

    var user = new AuthDto();
    user.email = createAuthDto.email;
    user.password = createAuthDto.password;

      var newUser = await this.authService.create(createAuthDto);

    

      const token = await this.authService.validateUser(user);

      const userWithToken = {
        ...newUser,
        token: token
    };

      return userWithToken;
    }

   


    
  

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authDto : AuthDto){

    const token = this.authService.validateUser(authDto)
    return token
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

 

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
