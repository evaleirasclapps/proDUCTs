import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add product';
  angForm: FormGroup;
  constructor(private productservice: ProductService, private fb: FormBuilder)
  {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }
  addProduct(name, status) {
      this.productservice.addProduct(name, status);
  }
  ngOnInit() {
  }
}
