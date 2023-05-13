import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProdutcsService} from "./services/produtcs.service";
import {Observable, tap} from "rxjs";
import {products} from "./data/products";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
}


