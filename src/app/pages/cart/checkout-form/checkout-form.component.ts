import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Output() successPayment: EventEmitter<NgForm> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formInfo: NgForm){
    this.successPayment.emit(formInfo);
  }

}
