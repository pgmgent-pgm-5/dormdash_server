import { Test, TestingModule } from '@nestjs/testing';
import { OrdersHasDishesResolver } from './orders-has-dishes.resolver';
import { OrdersHasDishesService } from './orders-has-dishes.service';

describe('OrdersHasDishesResolver', () => {
  let resolver: OrdersHasDishesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersHasDishesResolver, OrdersHasDishesService],
    }).compile();

    resolver = module.get<OrdersHasDishesResolver>(OrdersHasDishesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
