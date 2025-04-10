import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyTabsComponent } from './components/my-tabs/my-tabs.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'log-out',
    loadChildren: () => import('./pages/log-out/log-out.module').then( m => m.LogOutPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'repertoire',
    loadChildren: () => import('./pages/repertoire/repertoire.module').then( m => m.RepertoirePageModule)
  },
  {
    path: 'declaraciones',
    loadChildren: () => import('./pages/declaraciones/declaraciones.module').then( m => m.DeclaracionesPageModule)
  },
  {
    path: 'repartos',
    loadChildren: () => import('./pages/repartos/repartos.module').then( m => m.RepartosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
