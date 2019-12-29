import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente-service';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { LoginService } from './login/login.service';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ProjetosComponent } from './projetos/projetos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    MenuComponent,
    ProjetosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(ROUTES),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ClienteService,
    LoginService,
    UsuarioService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
