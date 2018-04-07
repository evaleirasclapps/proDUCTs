import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {Product} from './models/product.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const API_URL = 'http://localhost:4000/products';

@Injectable()
export class ProductService {

    private _products = [];
    private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    public products$ = this.productsSubject.asObservable();

    private get products(): Product[] {
        return this._products;
    }

    private set products(products: Product[]) {
        this.productsSubject.next(products);
        this._products = products;
    }

    constructor(private http: HttpClient) {
        this.getProducts().subscribe();
    }

    addProduct(name: string, status: string) {
        const uri = `${API_URL}/add`;
        const obj = {
            name: name,
            status: status
        };

        this.http.post<Product[]>(uri, obj)
            .subscribe(res => {
                this.products = this._products.concat(obj);
            });
    }

    getProducts() {
        const uri = `${API_URL}`;
        return this.http.get<Product[]>(uri)
            .do((products: Product[]) => {
                this.products = products;
            })
            .map(res => {
                return res;
            });
    }

    editProduct(id) {
        const uri = `${API_URL}/edit/${id}`;
        return this.http.get(uri);
    }

    updateProduct(name, status, id) {
        const uri = `${API_URL}/update/${id}`;

        const obj = {
            name: name,
            status: status
        };
        this.http.post(uri, obj)
            .do(_ => {
                this.products = this.products.map(product => {
                    if (product._id === id) {
                        return { _id: id, ...obj };
                    }
                    return product;
                });
            })
            .subscribe(res => console.log('Done'));
    }

    deleteProduct(id) {
        const uri = `${API_URL}/delete/${id}`;

        return this.http.get(uri)
            .do(_ => {
                this.products = this.products.filter(product => product._id !== id);
            });
    }
}
