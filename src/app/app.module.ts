import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Aula10Component } from './aula-10/aula-10.component';
import { Aula11Component } from './aula-11/aula-11.component';
import { Aula12Component } from './aula-12/aula-12.component';
import { Aula13Component } from './aula-13/aula-13.component';
import { InputPropertyComponent } from './aula-13/input-property/input-property.component';
import { Aula14Component } from './aula-14/aula-14.component';
import { OutputPropertyComponent } from './aula-14/output-property/output-property.component';
import { Aula15CicloDeVidaComponent } from './aula-15-ciclo-de-vida/aula-15-ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    Aula10Component,
    Aula11Component,
    Aula12Component,
    Aula13Component,
    InputPropertyComponent,
    Aula14Component,
    OutputPropertyComponent,
    Aula15CicloDeVidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
