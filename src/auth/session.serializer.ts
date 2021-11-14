import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user); // {id: user.id}
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    // const user = this.UsersService.findOne(payload.id);
    done(null, payload); // user
  }
}