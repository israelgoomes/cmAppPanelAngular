import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'clientes/:id', component: ClientesComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'cadastro-cliente/:id', component: CadastroClienteComponent},
    {path: 'app', component: AppComponent}

];