import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatListModule,
    CurrencyPipe,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);

  total = computed(() => this.cartService.cart().reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.value;
  }, 0))

}
