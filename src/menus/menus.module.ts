import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusResolver } from './menus.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { RestaurantsModule } from '../restaurants/restaurants.module';


@Module({
  imports: [TypeOrmModule.forFeature([Menu]), RestaurantsModule],
  // imports: [TypeOrmModule.forFeature([Menu])],
  providers: [MenusService, MenusResolver],
  // exports: [MenusService]
})
export class MenusModule {}
