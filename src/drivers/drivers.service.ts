import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(@InjectRepository(Driver) private driversRepository: Repository<Driver>){}

  create(createDriverInput: CreateDriverInput):Promise<Driver> {
    const newDriver = this.driversRepository.create(createDriverInput); 

    return this.driversRepository.save(newDriver);  // insert 
  }

  findAll():Promise<Driver[]> {
    return this.driversRepository.find();
  }

  findOne(id: number):Promise<Driver> {
    return this.driversRepository.findOneOrFail(id);
  }

  async update(id: number, updateDriverInput: UpdateDriverInput):Promise<Driver> {
    const updatedDriver = await this.driversRepository.preload({
      id: id,
      ...updateDriverInput,
    });

    return this.driversRepository.save(updatedDriver);
  }

  async remove(id: number):Promise<Driver> {
    const driver = await this.findOne(id);
    return this.driversRepository.remove(driver);
  }
}
