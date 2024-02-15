import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //En el Input se envie informacion desde el padre al hijo
  @Input({required: true}) product!: Product;
  //@Input({required: true}) price: number = 0;
  //@Input({required: true}) title: string = '';

  //En el output nos sirve para hacer lo contrario al input, osea que desde el hijo se envie informacion al padre
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
