import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-12',
  templateUrl: './aula-12.component.html',
  styleUrls: ['./aula-12.component.css']
})
export class Aula12Component implements OnInit {

  nome: string = 'abc';
  constructor() { }

  pessoa: any = {
    nome:'Jonatas',
    idade:22
  }
  ngOnInit() {
  }

}
