import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
 // { path: 'stock',  loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule) },
 // {  path: 'inventaire',  loadChildren: () => import('./inventaire/inventaire.module').then( m => m.InventairePageModule) },
  //{path: 'products',loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)},
  //{ path: 'emplacement',loadChildren: () => import('./emplacement/emplacement.module').then( m => m.EmplacementPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
