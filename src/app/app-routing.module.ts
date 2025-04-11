import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyTabsComponent } from './components/my-tabs/my-tabs.component';


const routes: Routes = [

  {
    	path: 'my-tabs', 
      component: MyTabsComponent,
      children:[

        {
          path: 'home',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
        },

        {
          path: 'home',
          redirectTo: 'home',
          pathMatch: 'full'
        },
       
        {
          path: 'profile',
          loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
        },

        {
          path: 'repertoire',
          loadChildren: () => import('./pages/repertoire/repertoire.module').then(m => m.RepertoirePageModule)
        },
        
        {
          path: 'declaraciones',
          loadChildren: () => import('./pages/declaraciones/declaraciones.module').then(m => m.DeclaracionesPageModule)
        },

        {
          path: 'repartos',
          loadChildren: () => import('./pages/repartos/repartos.module').then(m => m.RepartosPageModule)
        },
      ]
  },
  
  {
    path: '',
    redirectTo: 'my-tabs', // Redirige a la página de los tabs al inicio
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
