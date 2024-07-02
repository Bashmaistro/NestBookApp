import { Injectable } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { UserService } from 'src/service/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(authPayloadDto : AuthDto){

        const findUser = await this.userService.findByUsername(authPayloadDto.email)

        if (findUser && (findUser.password === authPayloadDto.password)) {
            
            const {password, ...user } = findUser;
            return this.jwtService.sign(user);

        }else{
            return findUser;
        }

    }



}
