import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemOfListComponent } from './components/product-item-of-list/product-item-of-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCreateFormComponent } from './components/product-create-form/product-create-form.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { ProductSystemComponent } from './product-system/product-system.component';
import { TestRoutComponent } from './test-rout/test-rout.component';

const path: Routes = [
  { path: '', component: ProductSystemComponent },
  { path: 'item/:id', component: TestRoutComponent},
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemOfListComponent,
    ProductDetailsComponent,
    ProductCreateFormComponent,
    NotFoundComponent,
    ProductSystemComponent,
    TestRoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(path),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
