import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servicos-listagem',
  templateUrl: './servicos-listagem.component.html',
  styleUrls: ['./servicos-listagem.component.css']
})
export class ServicosListagemComponent implements OnInit {

  servicos: Array<any> = [];
  
  constructor(private servicosService: ServicosService) { }

  ngOnInit(){

    this.listar();
  }

  listar(){

    this.servicosService.listar().subscribe(dados => this.servicos = dados);
  }
}
