import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

  async validateUser(email: string, password: string):Promise<any> {
    console.log(this.usersService.findOneByEmail(email));
    const user = await this.usersService.findOneByEmail(email);
    console.log(email);  
    console.log('authService', user);
      
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('authservice', user);
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
