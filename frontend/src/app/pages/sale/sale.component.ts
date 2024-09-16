import { Component, inject } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CategoryEnum } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule, 
    MatCardModule, 
    MatButtonModule, 
    CurrencyPipe,
    MatSnackBarModule
  ],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})

export class SaleComponent {
  cartService = inject(CartService);
  productService = inject(ProductService);
  products = this.productService.filterByCategory(CategoryEnum.Sales);
  snackbar = inject(MatSnackBar);

  addToCart(product: Product) {
    this.cartService.add(product)
    this.snackbar.open('Pedido adicionado ao carrinho!', 'Fechar');
  }
}

