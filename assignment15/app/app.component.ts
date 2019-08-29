import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment15';

  constructor(private formbuilder: FormBuilder) { }

  profileForm = this.formbuilder.group({
    firstName: ['Nilesh' ],
    lastName: ['q',  Validators.required],
    email: ['q', 
      Validators.required],
    phone: [''],
    address: ['q  ',[Validators.minLength(5)]]
    
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
