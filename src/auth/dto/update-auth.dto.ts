import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-auth.dto';
import { IsOptional } from 'class-validator';
import { Book } from 'src/book/entities/Book.schema';

export class UpdateUserDto{

    @IsOptional()
    username?: string;

    @IsOptional()
    email?: string;

    @IsOptional()
    password?: string;

    
    @IsOptional()
    favoriteBooks?: Book[];
    }
