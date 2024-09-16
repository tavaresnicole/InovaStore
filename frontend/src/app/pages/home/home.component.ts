import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatButtonModule, 
    CurrencyPipe, 
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent  implements OnInit{
  activatedRoute = inject(ActivatedRoute)
  aboutEl = viewChild<ElementRef<HTMLDivElement>>('about');

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe((res: any) => {
      if(res.showAbout) {
        this.showAbout();
      }
   })
  }

  showAbout() {
    this.aboutEl()?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
    console.log(this.aboutEl());
    
    
  }
}

