import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'discover/:id',
    loadChildren: () => import('./discover-content/discover-content.module').then( m => m.DiscoverContentPageModule)
  },
  {
    path: 'userproj/:id',
    loadChildren: () => import('./userproj-content/userproj-content.module').then( m => m.UserprojContentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'userproj',
    loadChildren: () => import('./userproj/userproj.module').then( m => m.UserprojPageModule)
  },
  {
    path: 'createproj',
    loadChildren: () => import('./createproj/createproj.module').then( m => m.CreateprojPageModule)
  },
  {
    path: 'userproj-content',
    loadChildren: () => import('./userproj-content/userproj-content.module').then( m => m.UserprojContentPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
