import { Routes } from '@angular/router';

//import { ListComponent } from './domains/products/pages/list/list.component';
//import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
//import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component')
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about.component')
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component')
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
