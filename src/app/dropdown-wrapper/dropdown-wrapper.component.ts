import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-wrapper',
  templateUrl: './dropdown-wrapper.component.html',
  styleUrls: ['./dropdown-wrapper.component.scss']
})
export class DropdownWrapperComponent implements OnInit {
  form: FormGroup;
  products = [{ name: 'Bananas', price: 30, stock: 'in stock'}, { name: 'Apples', price: 42, stock: 'N/A' }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      product: ['', this.myValidator]
    });
    this.form.get('product').valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  myValidator = (control: FormControl) => {
    const product = control.value;

    if (product && product.name !== 'Apples') {
      return { wrongName: true };
    } else {
      return null;
    }
  }

}
