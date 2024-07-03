import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { User } from 'src/schemas/User.schema';
import {CreateUserDto} from '../../Dtos/CreateUserDto'
import { CreateBookDto } from 'src/Dtos/CreateBookDto';
import { Book } from 'src/schemas/book.schema';



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User> 
    ){}


    async createuser(createUserDto: CreateUserDto){

        const newUser = new this.userModel(createUserDto);
        return await newUser.save();
    }


    async findByUsername(email: string): Promise<User | null> {
        return await this.userModel.findOne({ email }).exec();
    }

    async updateBook(book : Book , id: string){
        
        const user = await this.userModel.findById(id);

        const bookExists = user.favoriteBooks.some(favBook => favBook.bookName === book.bookName);

        if(book.author == user.username){
            return new HttpException("You Cannot Add Your Own Book to Favorites" , HttpStatus.BAD_REQUEST )
        }
        if(user.favoriteBooks.length == 10){
            return new HttpException("You Reached the Favoride Book Limits" , HttpStatus.NOT_ACCEPTABLE)
        }
        
        if(bookExists){
            return new HttpException("You Have Already Add This Book" , HttpStatus.BAD_REQUEST )
        }else{

            user.favoriteBooks.push(book);
            const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true });

            return updatedUser;
        }
        
    }

    






}



