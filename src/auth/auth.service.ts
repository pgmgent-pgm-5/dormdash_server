import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

  async validateUser(email: string, password: string):Promise<any> {
    console.log(this.usersService.findOneByEmail(email));
    const user = await this.usersService.findOneByEmail(email);
    console.log(email);  
    console.log('authService', user);
      
    if (user && user.password === password) {
      console.log('authservice', user);
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
