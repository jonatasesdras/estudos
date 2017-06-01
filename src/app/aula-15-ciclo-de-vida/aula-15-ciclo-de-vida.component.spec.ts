import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula15CicloDeVidaComponent } from './aula-15-ciclo-de-vida.component';

describe('Aula15CicloDeVidaComponent', () => {
  let component: Aula15CicloDeVidaComponent;
  let fixture: ComponentFixture<Aula15CicloDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula15CicloDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula15CicloDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
