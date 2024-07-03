import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import {  UpdateUserDto } from './dto/update-auth.dto';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDto } from './dto/auth.dto';
import {Model} from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Book } from 'src/book/entities/Book.schema';



@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private authModel: Model<User>,private jwtService: JwtService ){}

  async create(createAuthDto: CreateUserDto) {

    const user = new this.authModel(createAuthDto);
    const savedUser = await user.save();
    return savedUser.toObject();
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(id: string) {


    const user = await this.authModel.findById(id);
  
    return user.favoriteBooks;
  }

  async addFavorite(id:string  , book : Book){
    
    const user = await this.authModel.findById(id);


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
            const updatedUser = await this.authModel.findByIdAndUpdate(id, user, { new: true });

            return updatedUser;
        }
        


  }

  update(id: number,) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validateUser(authPayloadDto : AuthDto){

    const findUser = await this.authModel.findOne({email: authPayloadDto.email})

    if (findUser && (findUser.password === authPayloadDto.password)) {
        
        const {password, ...user } = findUser;
        return this.jwtService.sign(user);

    }else{
        return findUser;
    }

}
}
