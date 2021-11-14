import { Test, TestingModule } from '@nestjs/testing';
import { DishesResolver } from './dishes.resolver';

describe('DishesResolver', () => {
  let resolver: DishesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DishesResolver],
    }).compile();

    resolver = module.get<DishesResolver>(DishesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
