import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/PaymentConfirmation';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  paymentData: Payment = {
    fullName: '',
    address: '',
    cardNumber: '',
    totalPrice: 0
  }

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentData = this.paymentService.getConfirmation();
  }

}
