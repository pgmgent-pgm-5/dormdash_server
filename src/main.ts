import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://dormdash.onrender.com/#/',
    credentials: true,
    allowedHeaders:
      'Content-Type, Accept, Authorization, X-Requested-With, Origin, X-Csrftoken, X-Xsrftoken',
    methods: 'GET,PUT,POST,DELETE',
  });

  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://dormdash.onrender.com/#/',
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

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

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
