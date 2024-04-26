import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @ViewChild('formReference') signUpForm?:NgForm;
  
  onSubmit() {
    console.log(this.signUpForm)
  }
}
