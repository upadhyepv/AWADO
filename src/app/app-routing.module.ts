import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'myreservation',
    loadChildren: () => import('./myreservation/myreservation.module').then( m => m.MyreservationPageModule)
  },
  {
    path: 'hirebike',
    loadChildren: () => import('./hirebike/hirebike.module').then( m => m.HirebikePageModule)
  },
  {
    path: 'ridehistory',
    loadChildren: () => import('./ridehistory/ridehistory.module').then( m => m.RidehistoryPageModule)
  },
  {
  path: 'feedback',
  loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
},
  {
    path: 'help-line',
    loadChildren: () => import('./help-line/help-line.module').then( m => m.HelpLinePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
