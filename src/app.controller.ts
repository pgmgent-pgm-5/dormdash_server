import { Controller, Get, Param, Post, Request, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { join } from 'path';


export const storage = {
  storage: diskStorage({
    destination: './uploads/logos',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  }
)};

export const storageDishPicture = {
  storage: diskStorage({
    destination: './uploads/dishes',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  }
)};

export const storageRestaurantPicture = {
  storage: diskStorage({
    destination: './uploads/restaurants',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  }
)};

export const storageProfilePicture = {
  storage: diskStorage({
    destination: './uploads/profiles',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  }
)};

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usersService: UsersService,
  ) {}

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
    console.log(req);
    let { firstName, lastName, email, phone, password, role, studentNumber, picture } =
      req.body;
    const createdUser = this.usersService.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
      studentNumber,
      picture
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
    return { message: 'logged out!' };
  }

  @Get('/')
  getHelloWorld(): string {
    return 'hello world';
  }

  // @UseGuards(AuthenticatedGuard)
  @Post('uploadLogo')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadLogoImage(@UploadedFile() file, @Request() req): Observable<Object>{
    console.log(file);
    return of({imagePath: file.filename});
  }

  // @UseGuards(AuthenticatedGuard)
  @Post('uploadDishPicture')
  @UseInterceptors(FileInterceptor('file', storageDishPicture))
  uploadDishPicture(@UploadedFile() file, @Request() req): Observable<Object>{
    console.log(file);
    return of({imagePath: file.filename});
  }

  // @UseGuards(AuthenticatedGuard)
  @Post('uploadRestaurantPicture')
  @UseInterceptors(FileInterceptor('file', storageRestaurantPicture))
  uploadRestaurantPicture(@UploadedFile() file, @Request() req): Observable<Object>{
    console.log(file);
    return of({imagePath: file.filename});
  }

  // @UseGuards(AuthenticatedGuard)
  @Post('uploadProfilePicture')
  @UseInterceptors(FileInterceptor('file', storageProfilePicture))
  uploadProfilePicture(@UploadedFile() file, @Request() req): Observable<Object>{
    console.log(file);
    return of({imagePath: file.filename});
  }

  @Get('logo-image/:imagename')
  findLogoImage(@Param('imagename') imagename, @Res() res):Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/logos/' + imagename)));
  }

  @Get('dish-image/:imagename')
  findDishImage(@Param('imagename') imagename, @Res() res):Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/dishes/' + imagename)));
  }

  @Get('restaurant-image/:imagename')
  findRestaurantImage(@Param('imagename') imagename, @Res() res):Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/restaurants/' + imagename)));
  }

  @Get('profile-image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res):Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/profiles/' + imagename)));
  }


}


