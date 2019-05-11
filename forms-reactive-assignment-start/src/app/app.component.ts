import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['stable', 'critical', 'finished'];
  dataForm: FormGroup;
  project = ['test', 'Test'];

  ngOnInit() {
    this.dataForm = new FormGroup({
      'projectName': new FormControl(null,  Validators.required, this.emailValidator.bind(this)),
      'email': new FormControl(null, [ Validators.required, Validators.email] ),
      'projectStatus': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.dataForm);
  }

   emailValidator(control: FormControl): Promise<any> | Observable<any> {
   // {[s: string]: boolean}
    // console.log(this.project.indexOf(control.value));
    // if (this.project.indexOf(control.value) !== -1) {
    //   console.log(typeof control.value);
    //   return {'validateEmail': true};
    // } else {
    //   return null;
    // }
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.project.indexOf(control.value) !== -1) {
          resolve({'validateEmail': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
