import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'nest dormdash', // get env vars
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors({
    origin: true,
    credentials: true,
    allowedHeaders:
      'Content-Type, Accept, Authorization, X-Requested-With, Origin, X-Csrftoken, X-Xsrftoken',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
