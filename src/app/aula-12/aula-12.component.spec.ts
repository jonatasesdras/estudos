import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula12Component } from './aula-12.component';

describe('Aula12Component', () => {
  let component: Aula12Component;
  let fixture: ComponentFixture<Aula12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
