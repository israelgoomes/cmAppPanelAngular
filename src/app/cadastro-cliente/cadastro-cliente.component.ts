import { ClienteModel } from 'src/app/clientes/cliente.model';
import { ClienteService } from './../clientes/cliente-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(public clienteSrvc: ClienteService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }


  getDataClient(event: ClienteModel){
    console.log( 'Usuario no componente', this.route.snapshot.params['id'])
    event.usuario = this.route.snapshot.params['id'];
    console.log('Dados do cliente cadastrado com id do usuario', event)
    this.clienteSrvc.includesClient(event).subscribe(v=>{
      console.log('cadastrado com sucesso!')
     this.router.navigate(['/usuarios'])
    }, error => {
      console.log('error', error)
    });
  }
}
