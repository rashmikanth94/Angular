import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css']
})
export class ReativeFormsComponent implements OnInit{

  signUpForm:FormGroup;

  statemap:any;
  errormap:any;

  constructor() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl('sao', [Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
      'groupExample': new FormGroup({
        'company':new FormControl(null, Validators.required),
        'empId': new FormControl(null, Validators.required)
      }),
      'arrayExample': new FormArray([])
    })
  }

  ngOnInit() {
    this.statemap = {
      username:'',
      email:''
    }

    this.errormap = {
      username: {
        required:'Field Required',
      },
      email: {
        required: 'Email Required',
        email:'Please enter a valid email'
      }
    }
  }

  //Form array start

  addNewItem() {
    const control = new FormControl(null);
    (this.signUpForm.get('arrayExample') as FormArray).push(control);
    console.log(this.signUpForm);
  }

  getControls() {
    return (this.signUpForm.get('arrayExample') as FormArray).controls
  }

  //Form array end


  checkValidation(field:string) {
    const controls = this.signUpForm.controls;
    const errors:any = controls[field].errors;
    const error = Object.keys(errors)[0];
    if(error) {
      this.statemap[field] = {},
      this.statemap[field].status = 'invalid',
      this.statemap[field].message = this.errormap[field][error];
    } else {
      this.statemap[field] = {}
    }
  }


}
