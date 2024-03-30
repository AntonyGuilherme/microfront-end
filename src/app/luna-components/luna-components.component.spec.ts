import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaComponentsComponent } from './luna-components.component';

describe('LunaComponentsComponent', () => {
  let component: LunaComponentsComponent;
  let fixture: ComponentFixture<LunaComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunaComponentsComponent]
    });
    fixture = TestBed.createComponent(LunaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
