import { Test, TestingModule } from '@nestjs/testing';
import { OrdersHasDishesService } from './orders-has-dishes.service';

describe('OrdersHasDishesService', () => {
  let service: OrdersHasDishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersHasDishesService],
    }).compile();

    service = module.get<OrdersHasDishesService>(OrdersHasDishesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
