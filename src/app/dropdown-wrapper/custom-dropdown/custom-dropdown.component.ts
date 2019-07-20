import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    },
  ],
})
export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() products;
  isListVisible: boolean;

  constructor() {
    console.log(this.products)
  }
  value: any;
  propagateChange: any = () => {};

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

  selectProduct(product) {
    this.value = product;
    this.propagateChange(this.value);
  }

  getCssForSelectedProduct(product) {
    return {
      selected: this.value && this.value.name === product.name,
    };
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    // this.propagateChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean): void {}
}
