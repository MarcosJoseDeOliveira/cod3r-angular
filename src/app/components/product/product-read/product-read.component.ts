import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price','action'];

  products: Product[];

  constructor(private productServide: ProductService) { }

  ngOnInit(): void {
    this.productServide.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}
