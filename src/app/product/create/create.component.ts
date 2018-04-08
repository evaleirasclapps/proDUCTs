import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    title = 'Add product';
    angForm: FormGroup;

    constructor(
        private productservice: ProductService,
        private fb: FormBuilder,
        private router: Router) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            status: ['', Validators.required]
        });
    }

    addProduct(name, status) {
        this.productservice.addProduct(name, status);
        this.router.navigateByUrl('index');
    }

    ngOnInit() {
    }
}
