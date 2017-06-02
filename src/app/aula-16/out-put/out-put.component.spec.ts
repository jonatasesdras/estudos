import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPutComponent } from './out-put.component';

describe('OutPutComponent', () => {
  let component: OutPutComponent;
  let fixture: ComponentFixture<OutPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
