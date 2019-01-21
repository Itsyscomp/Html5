import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthorizatedGuard} from "./core/guards/authorizated.guard";
import { IndexHomeComponent } from './index/indexhome.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'indexhome', component: IndexHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

export const Routing = RouterModule.forRoot(appRoutes);
