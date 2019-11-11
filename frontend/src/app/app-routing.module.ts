import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminChatPageComponent } from './pages/admin-chat-page/admin-chat-page.component';
import { UserChatPageComponent } from './pages/user-chat-page/user-chat-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'user-chat', component: UserChatPageComponent},
  { path: 'admin-chat', component: AdminChatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
