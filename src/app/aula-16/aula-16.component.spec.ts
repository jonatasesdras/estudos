import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula16Component } from './aula-16.component';

describe('Aula16Component', () => {
  let component: Aula16Component;
  let fixture: ComponentFixture<Aula16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
