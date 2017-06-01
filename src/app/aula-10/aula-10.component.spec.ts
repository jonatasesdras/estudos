import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula10Component } from './aula-10.component';

describe('Aula10Component', () => {
  let component: Aula10Component;
  let fixture: ComponentFixture<Aula10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
