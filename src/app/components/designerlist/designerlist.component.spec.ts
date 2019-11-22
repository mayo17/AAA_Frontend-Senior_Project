import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerlistComponent } from './designerlist.component';

describe('DesignerlistComponent', () => {
  let component: DesignerlistComponent;
  let fixture: ComponentFixture<DesignerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
