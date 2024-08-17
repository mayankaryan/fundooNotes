import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NotesComponent } from './dashboard/notes/notes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'notes',
        component: NotesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
