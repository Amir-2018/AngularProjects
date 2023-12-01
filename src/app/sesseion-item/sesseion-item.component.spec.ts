import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesseionItemComponent } from './sesseion-item.component';

describe('SesseionItemComponent', () => {
  let component: SesseionItemComponent;
  let fixture: ComponentFixture<SesseionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesseionItemComponent]
    });
    fixture = TestBed.createComponent(SesseionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
