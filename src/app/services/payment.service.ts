import { Injectable } from '@angular/core';
import { Payment } from '../models/PaymentConfirmation';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  confirmation: Payment = {
    fullName: '',
    address: '',
    cardNumber: '',
    totalPrice: 0
  }

  constructor() { }

  getConfirmation(){
    return this.confirmation;
  }

  addConfirmation(data: Payment){
    this.confirmation = data;
  }

}
