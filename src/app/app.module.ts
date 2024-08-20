import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    NotesComponent
  ],
  imports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
