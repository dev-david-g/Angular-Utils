import { Component, forwardRef,  } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'password-input',
  templateUrl: 'password-input.component.html',
  styleUrls: ['password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    }]
})
export class PasswordInputComponent implements ControlValueAccessor {

  inputType = 'password';
  placeholder = 'Password';
  value;


   onChange = (_: any) => { };

  writeValue(value: any): void { this.value = value;}

  registerOnChange(change: (_: any) => {}): void {this.onChange = change;} 

  registerOnTouched(touched: any): void {}

  setDisabledState(isDisabled: boolean): void {}


  onInputChange(value) {
      this.onChange(value);
  }

  showPassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
