
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'

  export class CreateBookDto{

    @IsNotEmpty()
    @IsString()
    bookName: string;

    
    
    author: string;

    
    @IsString()
    @IsOptional()
    summary?: string;

    
    }