import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaNotFoundedComponent } from './luna-not-founded.component';

describe('LunaNotFoundedComponent', () => {
  let component: LunaNotFoundedComponent;
  let fixture: ComponentFixture<LunaNotFoundedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunaNotFoundedComponent]
    });
    fixture = TestBed.createComponent(LunaNotFoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
