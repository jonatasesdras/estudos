import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula13Component } from './aula-13.component';

describe('Aula13Component', () => {
  let component: Aula13Component;
  let fixture: ComponentFixture<Aula13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
