import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'product/:id', component: ProductDetailsComponent },
  // { path: '', redirectTo: '/products', pathMatch: 'full' }
]; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ MatButtonModule,
    MatCardModule,
    BrowserModule, RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
