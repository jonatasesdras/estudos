import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://igrejaemsergipe.com.br';
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  cursoAngular: boolean = true;

  getValor(){
    return 1;

  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
