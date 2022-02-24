import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage ,
    children : [
      
      {
        path: 'stock' ,
        children :[
          {
          path : '' ,
          loadChildren :() => import('../stock/stock.module').then(x => x.StockPageModule)

          }
        ]
        
      },
      {
        path: 'inventaire' ,
        children :[
          {
          path : '' ,
          loadChildren :() => import('../inventaire/inventaire.module').then(x => x.InventairePageModule)

          }
        ]
        
      },
      {
        path: 'emplacement' ,
        children :[
          {
          path : '' ,
          loadChildren :() => import('../emplacement/emplacement.module').then(x => x.EmplacementPageModule)

          }
        ]
        
      },
      {
        path: 'produits' ,
        children :[
          {
          path : '' ,
          loadChildren :() => import('../products/products.module').then(x => x.ProductsPageModule)

          }
        ]
        
      }, 
      {
        path: '' ,
        redirectTo:'/tabs',
        pathMatch : 'full'
       
        
      }

    ]
  },
  {
    path: '' ,
    redirectTo:'/tabs',
    pathMatch : 'full'
   
    
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
