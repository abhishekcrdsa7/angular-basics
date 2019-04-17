import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  username:String = '';
  displayDetail:boolean = false;
  forArray = [];
  index:number = -1;

  onButtonClick(){
    this.username = '';
  }

  displayDetails(){
    this.forArray.push('The button was clicked.');
    this.displayDetail = !this.displayDetail;
    this.index++;
  }
}
