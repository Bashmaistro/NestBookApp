import {Book} from '../schemas/Book.schema'
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'
import { MaxArraySize } from "../Dtos/customValidator/MaxSizeValidator.decarator"

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
    @MaxArraySize(10 , { message: "You can add maximum 10 book to your favorites"})
    favoriteBooks: Book[];
    }