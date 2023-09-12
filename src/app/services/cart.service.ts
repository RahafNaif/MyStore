import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public static cartProductsList: Product[] = [];

  constructor() { }

  addToCart(product: Product, quantity: number, inCartQuantity: boolean){
    const existedProduct = CartService.cartProductsList.filter(inCartProduct => inCartProduct.id == product.id);
    if(existedProduct.length == 0){
      product['quantity'] = quantity;
      CartService.cartProductsList.push(product);
    }else if(inCartQuantity) {
      existedProduct[0]['quantity'] = quantity;
      CartService.cartProductsList = CartService.cartProductsList.filter(inCartProduct => inCartProduct.id !== product.id).concat(existedProduct);
    }else {
      const newQuantity = existedProduct[0]['quantity'] as number + quantity;
      existedProduct[0]['quantity'] = newQuantity;
      CartService.cartProductsList = CartService.cartProductsList.filter(inCartProduct => inCartProduct.id !== product.id).concat(existedProduct);
    }
  }

  getCartProducts() {
    return CartService.cartProductsList;
  }

  deleteCart(){
    CartService.cartProductsList = [];
  }

  deleteProduct(productID: number){
    CartService.cartProductsList = CartService.cartProductsList.filter((product) => product.id !== productID);
  }
}
