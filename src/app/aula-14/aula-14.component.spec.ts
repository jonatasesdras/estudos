import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula14Component } from './aula-14.component';

describe('Aula14Component', () => {
  let component: Aula14Component;
  let fixture: ComponentFixture<Aula14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
