import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSystemComponent } from './product-system.component';

describe('ProductSystemComponent', () => {
  let component: ProductSystemComponent;
  let fixture: ComponentFixture<ProductSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSystemComponent]
    });
    fixture = TestBed.createComponent(ProductSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
