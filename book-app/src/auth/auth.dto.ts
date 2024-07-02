import { IsEmail, IsString, isString } from "class-validator";

export class AuthDto{

    @IsString()
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
}