import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProdutcsService} from "../../services/produtcs.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  title = 'Fendy.tj';
  // product: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term: string = ''

  constructor(
    public productsService: ProdutcsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    // tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
