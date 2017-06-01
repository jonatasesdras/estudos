import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula11Component } from './aula-11.component';

describe('Aula11Component', () => {
  let component: Aula11Component;
  let fixture: ComponentFixture<Aula11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
