import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    products: any;

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.products$
            .subscribe(res => {
                this.products = res;
            });
    }

    deleteProduct(id) {
        this.service.deleteProduct(id)
            .subscribe(res => {
                console.log('Deleted');
            });
    }
}
