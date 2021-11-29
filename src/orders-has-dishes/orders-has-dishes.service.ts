import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdersHasDishInput } from './dto/create-orders-has-dish.input';
import { UpdateOrdersHasDishInput } from './dto/update-orders-has-dish.input';
import { OrdersHasDish } from './entities/orders-has-dish.entity';

@Injectable()
export class OrdersHasDishesService {
  constructor (@InjectRepository(OrdersHasDish) private ordersHasDishRepository: Repository<OrdersHasDish>){}

  create(createOrdersHasDishInput: CreateOrdersHasDishInput):Promise<OrdersHasDish> {
    const newUser = this.ordersHasDishRepository.create(createOrdersHasDishInput); 

    return this.ordersHasDishRepository.save(newUser);  // insert 
  }

  findAll():Promise<OrdersHasDish[]> {
    return this.ordersHasDishRepository.find();
  }

  findOne(id: number):Promise<OrdersHasDish> {
    return this.ordersHasDishRepository.findOneOrFail(id);
  }

  async update(id: number, updateOrdersHasDishInput: UpdateOrdersHasDishInput):Promise<OrdersHasDish> {
    const updatedOrderHasDish = await this.ordersHasDishRepository.preload({
      id: id,
      ...updateOrdersHasDishInput,
    });

    return this.ordersHasDishRepository.save(updatedOrderHasDish);
  }

  async remove(id: number):Promise<OrdersHasDish> {
    const orderHasDish = await this.findOne(id);
    return this.ordersHasDishRepository.remove(orderHasDish);
  }
}
