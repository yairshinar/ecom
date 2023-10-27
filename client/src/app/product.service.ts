import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 
  // Ensure you have this method:
  getProductById(id: string | null): Observable<any> {
    // Replace this with your actual API endpoint
    return this.http.get<any>(`http://localhost:5000/products/${id}`);
  }

  getProducts(): Observable<any[]> {
    // Replace the URL with your actual endpoint
    return this.http.get<any[]>('http://localhost:5000/products');
  }
  getProductDetails(id: string) {
    return this.http.get(`http://localhost:5000/products/${id}`);
  }

}
