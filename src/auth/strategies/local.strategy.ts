import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local"
import { AuthService } from "../auth.service";
import { AuthDto } from "../dto/auth.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private authServicer: AuthService){
        super({
            usernameField: 'email',
            passwordField: 'password',
          });
    }

    async validate(username: string , password: string){

        console.log({ username, password }); 

        
        const newAuth = new AuthDto();

        newAuth.email = username;
        newAuth.password = password

        
        const user = await this.authServicer.validateUser(newAuth);
        console.log(user);
        

        if(!user){
            throw new UnauthorizedException();
            
        }else{
            return user;
        }
    }



}