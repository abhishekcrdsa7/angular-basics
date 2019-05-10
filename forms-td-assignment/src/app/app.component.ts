import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  submitted = false;
  userData: {email: string, subscription: string};

  onSubmit(ele: NgForm) {
    this.userData = {
      email: ele.value.email,
      subscription: ele.value.subscriptions
    };
    this.submitted = true;
    console.log(this.form);
  }
}
