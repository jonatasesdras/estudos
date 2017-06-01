import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-11',
  templateUrl: './aula-11.component.html',
  styleUrls: ['./aula-11.component.css']
})
export class Aula11Component implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
