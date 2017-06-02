import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-16',
  templateUrl: './aula-16.component.html',
  styleUrls: ['./aula-16.component.css']
})
export class Aula16Component implements OnInit {

  valorInicial: number = 15;
  constructor() { }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}
