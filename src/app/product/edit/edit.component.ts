import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    product: any;
    angForm: FormGroup;
    title = 'Edit Product';

    constructor(private route: ActivatedRoute, private router: Router, private service: ProductService, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            status: ['', Validators.required]
        });
    }

    updateProduct(name, status) {
        this.route.params.subscribe(params => {
            this.service.updateProduct(name, status, params['id']);
            this.router.navigate(['index']);
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.service.editProduct(params['id']).subscribe(res => {
                this.angForm.patchValue(res);
            });
        });
    }
}
