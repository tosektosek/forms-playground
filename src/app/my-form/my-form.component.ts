import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  ValidatorFn,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  demoForm: FormGroup;
  inputForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      demoArray: this.fb.array([]),
    });
    this.inputForm = this.fb.group({
      name: '',
      type: ['', this.typeValidator()],
    });
    console.log(this.inputForm);
  }

  ngOnInit() {}

  get demoArray() {
    return this.demoForm.get('demoArray') as FormArray;
  }

  get inputFormValues() {
    return this.inputForm.value;
  }

  addItem() {
    console.log(this.inputFormValues);
    this.demoArray.push(
      this.fb.group({
        name: this.inputFormValues.name,
        type: this.inputFormValues.type,
      }),
    );
  }

  removeItem() {
    this.demoArray.removeAt(this.demoArray.length - 1);
  }

  typeValidator(): ValidatorFn {
    const validator: ValidatorFn = (control: FormControl) => {
      const type = control.value;

      if (
        type === 'text' ||
        type === 'number' ||
        type === 'checkbox' ||
        type === 'date' ||
        type === 'file' ||
        type === 'password'
      ) {
        return null;
      } else {
        return { wrongType: true };
      }
    };

    return validator;
  }
}
