import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/auth.entity';

@Module({
  imports: [JwtModule.register({
    secret: 'secretkey',
    signOptions: {expiresIn: '1h'},
  }),
  MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema

}])],
  controllers: [AuthController],
  providers: [AuthService ,LocalStrategy,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
