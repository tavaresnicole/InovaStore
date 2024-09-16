import { Component, inject } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../../cart/cart/cart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterLink,
    RouterOutlet,
    MatListModule,
    MatBadgeModule,
    OverlayModule,
    CartComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  cartService = inject(CartService);
  user = sessionStorage.getItem("user");

  isOpen = false;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}

