import {
        Component,
        OnInit, 
        OnChanges, 
        DoCheck, 
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit, 
        OnDestroy, Input 
      } from '@angular/core';

@Component({
  selector: 'app-aula-15-ciclo-de-vida',
  templateUrl: './aula-15-ciclo-de-vida.component.html',
  styleUrls: ['./aula-15-ciclo-de-vida.component.css']
})
export class Aula15CicloDeVidaComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy  {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnchanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContenttInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
