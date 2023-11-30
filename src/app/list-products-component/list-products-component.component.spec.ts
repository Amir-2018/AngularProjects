import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponentComponent } from './list-products-component.component';

describe('ListProductsComponentComponent', () => {
  let component: ListProductsComponentComponent;
  let fixture: ComponentFixture<ListProductsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsComponentComponent]
    });
    fixture = TestBed.createComponent(ListProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
