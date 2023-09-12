import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Route } from 'src/app/app.constants';
import { Payment } from 'src/app/models/PaymentConfirmation';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  isEmpty: boolean = true;
  total: number = 0;
  name: string = '';
  address: string = '';
  cardNumber: string = '';

  constructor(private cartService: CartService, private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartProducts();

    if(this.cartList.length !==0){
      this.isEmpty = false;
      this.calculateTotal();
    }
  }

  onChangeAmount(quantity: number, product: Product){
    this.cartService.addToCart(product, quantity, true);
    this.calculateTotal();
    alert("Product amount changed to {quantity}")
  }

  calculateTotal(){
    this.total = this.cartList.reduce((pre, curr) => {
      const current = curr.price * Number(curr.quantity);
      return pre + current;
    }, 0);
  }

  onSuccessPayment(formInfo: NgForm){
    const paymentData: Payment = {
      fullName: formInfo.value.name,
      address: formInfo.value.address,
      cardNumber: formInfo.value.cardNumber,
      totalPrice: this.total
    }

    this.paymentService.addConfirmation(paymentData);
    this.cartService.deleteCart();
    this.router.navigateByUrl(Route.CONFIRMATION_ROUTE);
  }

  removeProduct(id: number){
    this.cartService.deleteProduct(id);
    this.cartList = this.cartService.getCartProducts();

    if(this.cartList.length !==0){
      this.isEmpty = false;
      this.calculateTotal();
    }else {
      this.total = 0;
      this.router.navigateByUrl(Route.PRODUCTS_ROUTE);
    }

    alert("The product removed successfully");
  }

}
