import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { MainComponent } from './pages/main/main.component';
import { SaleComponent } from './pages/sale/sale.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
      {
        path: 'sale',
        component: SaleComponent,
      },
      {
        path: 'produtos/:gender',
        component: ProdutosComponent,
      }
    ],
  },
];
