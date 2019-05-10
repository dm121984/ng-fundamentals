import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routs';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ], 
  providers: [
   
  ]
})

export class UserModules {

}
