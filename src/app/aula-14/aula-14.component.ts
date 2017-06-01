import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-14',
  templateUrl: './aula-14.component.html',
  styleUrls: ['./aula-14.component.css']
})
export class Aula14Component implements OnInit {


  valorInicial: number = 15;
  constructor() { }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}
