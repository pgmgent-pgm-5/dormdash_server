import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { join } from 'path';
import { AppService } from './app.service';
import { MenusModule } from './menus/menus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'dormdash',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MenusModule,
    RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
