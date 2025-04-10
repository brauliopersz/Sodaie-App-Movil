import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MyTabsComponent } from 'src/app/components/my-tabs/my-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path:'MyTabsComponent',
    component: MyTabsComponent,


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
