import { Component, inject, Input, input } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { GenderEnum } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    MatSnackBarModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {
  cartService = inject(CartService);
  snackbar = inject(MatSnackBar);

  products = inject(ProductService);
  filteredProducts: Product[] = [];
  route = inject(ActivatedRoute);

  product = this.products.products;
  female = this.products.filterByGender(GenderEnum.Female);
  male = this.products.filterByGender(GenderEnum.Male);

  @Input() gender?: string;

  constructor() {}

  ngOnInit() {
    if (this.gender === 'm')
      this.filteredProducts = this.products.filterByGender(GenderEnum.Male);
    else if (this.gender === 'f')
      this.filteredProducts = this.products.filterByGender(GenderEnum.Female);
    else this.filteredProducts = this.products.products;

    document.querySelector('.mat-drawer-content')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  addToCart(product: Product) {
    this.cartService.add(product)
    this.snackbar.open('Pedido adicionado ao carrinho!', 'Fechar');
  }
}
