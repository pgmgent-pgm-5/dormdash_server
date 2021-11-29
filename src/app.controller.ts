import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(req.user);
    return { id: req.user.id, email: req.user.email, role: req.user.role };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('authenticated')
  authenticated(@Request() req): any {
    return { id: req.user.id, email: req.user.email };
  }

  @Post('signup')
  async signup(@Request() req): Promise<any> {
    let { firstName, lastName, email, phone, password, role, studentNumber } = req.body;
    const createdUser = this.usersService.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
      studentNumber,
    });
    return createdUser;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('logout')
  logout(@Request() req): any {
    req.session.destroy((error) => {
      if (error) {
        return error;
      }
    });
    return { message: 'logged out!'}
  }

  @Get('/')
  getHelloWorld(): string {
    return 'hello world';
  }
}
