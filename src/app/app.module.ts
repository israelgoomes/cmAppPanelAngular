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
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION  } from 'ngx-ui-loader';
import { HttpProvider } from './http.provider';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestesComponent } from './testes/testes.component';


const configSpinner: NgxUiLoaderConfig ={
  bgsColor: 'red',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 40,
  bgsType: SPINNER.wanderingCubes, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  text: "Carregando dados...",
  fgsColor: '#527F76',
  logoUrl: "../assets/imgs/logo_app.png"
  
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    MenuComponent,
    ProjetosComponent,
    UsuariosComponent,
    UsuarioComponent,
    FormComponent,
    TestesComponent,

  ],
  entryComponents: [
  
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
    HttpClientModule,
    MatDialogModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgxUiLoaderModule.forRoot(configSpinner)
    //Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ClienteService,
    LoginService,
    UsuarioService,
    HttpProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
