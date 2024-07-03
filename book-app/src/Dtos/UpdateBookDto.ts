import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'

  export class UpdateBookDto{

    @IsOptional()
    bookName?: string;

    
    @IsOptional()
    author?: string;

    
    
    @IsOptional()
    summary?: string;

    
    }