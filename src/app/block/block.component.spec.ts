import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    component.block = {
      id: '1',
      type: 'blocks',
      attributes: {
        index: 1,
        timestamp: 1530677153,
        data: 'By reason of these things',
        'previous-hash': 'KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=',
        hash: 'nzl9y9lf4NdSQZCw293n5ICLniP6GnWecWcvAjWKjnc=',
      },
    };

    fixture.detectChanges();
  });

  it('should contains correct data', () => {
    const index = fixture.nativeElement.querySelector('.index');
    const data = fixture.nativeElement.querySelector('.data');
    fixture.detectChanges();
    expect(index.textContent).toContain(component.block.attributes.index);
    expect(data.textContent).toContain(component.block.attributes.data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
