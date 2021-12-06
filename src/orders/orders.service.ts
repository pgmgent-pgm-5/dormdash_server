import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    private usersRepository: UsersService
    ){}

  create(createOrderInput: CreateOrderInput):Promise<Order> {
    const newOrder = this.ordersRepository.create(createOrderInput); 

    return this.ordersRepository.save(newOrder);  // insert 
  }

  findAll():Promise<Order[]> {
    return this.ordersRepository.find();
  }

  findAllByRestaurantId(restaurantId: number):Promise<Order[]> {
    return this.ordersRepository.find({restaurantId});
  }

  getOrderUser(userId: number):Promise<User> {
    const id = userId;
    console.log(id);
    return this.usersRepository.findOne(id);
  }

  findOne(id: number):Promise<Order> {
    return this.ordersRepository.findOneOrFail(id);
  }

  async update(id: number, updateOrderInput: UpdateOrderInput):Promise<Order> {
    const updatedOrder = await this.ordersRepository.preload({
      id: id,
      ...updateOrderInput,
    });

    return this.ordersRepository.save(updatedOrder);
  }

  async remove(id: number):Promise<Order> {
    const order = await this.findOne(id);
    return this.ordersRepository.remove(order);
  }
}
