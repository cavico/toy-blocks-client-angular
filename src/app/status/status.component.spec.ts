import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from '../loader/loader.component';

import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent, LoaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.online = true;

    fixture.detectChanges();
  });

  it('should contains correct data', () => {
    const wrapper = fixture.nativeElement.querySelector('.wrapper');
    fixture.detectChanges();
    expect(wrapper.textContent).toContain('Online');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
