import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusResolver } from './menus.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';


@Module({
  imports: [TypeOrmModule.forFeature([Menu]), RestaurantsModule],
  providers: [MenusService, MenusResolver]
})
export class MenusModule {}
