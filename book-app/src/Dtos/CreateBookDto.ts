
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'

  export class CreateBookDto{

    @IsNotEmpty()
    @IsString()
    bookName: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    
    @IsString()
    @IsOptional()
    summary?: string;

    
    }