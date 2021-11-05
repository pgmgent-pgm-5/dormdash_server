import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(@InjectRepository(Payment) private paymentsRepository: Repository<Payment>){}

  create(createPaymentInput: CreatePaymentInput):Promise<Payment> {
    const newPayment = this.paymentsRepository.create(createPaymentInput); 

    return this.paymentsRepository.save(newPayment);  // insert 
  }

  findAll():Promise<Payment[]> {
    return this.paymentsRepository.find();
  }

  findOne(id: number):Promise<Payment> {
    return this.paymentsRepository.findOneOrFail(id);
  }

 async update(id: number, updatePaymentInput: UpdatePaymentInput):Promise<Payment> {
  const updatedPayment = await this.paymentsRepository.preload({
    id: id,
    ...updatePaymentInput,
  });

  return this.paymentsRepository.save(updatedPayment);
  }

  async remove(id: number):Promise<Payment> {
    const payment = await this.findOne(id);
    return this.paymentsRepository.remove(payment)
  }
}
