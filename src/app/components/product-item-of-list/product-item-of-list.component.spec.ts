import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemOfListComponent } from './product-item-of-list.component';

describe('ProductItemOfListComponent', () => {
  let component: ProductItemOfListComponent;
  let fixture: ComponentFixture<ProductItemOfListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemOfListComponent]
    });
    fixture = TestBed.createComponent(ProductItemOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
