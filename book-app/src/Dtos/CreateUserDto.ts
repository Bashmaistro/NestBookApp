import {Book} from '../schemas/Book.schema'
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'

  export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsArray()
    @IsOptional()
    favoriteBooks: Book[];
    }