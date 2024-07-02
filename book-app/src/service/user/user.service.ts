import { HttpException, Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { User } from 'src/schemas/User.schema';
import {CreateUserDto} from '../../Dtos/CreateUserDto'
import { CreateBookDto } from 'src/Dtos/CreateBookDto';



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

    






}



