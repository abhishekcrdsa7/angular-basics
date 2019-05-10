import { Component } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

import { Serve } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Serve]
})
export class AppComponent {
  title = 'my-first-app';
  even: number[] = [];
  odd: number[] = [];
  show: boolean = true;

  constructor(private log: Serve){}
  logc() {
    this.log.doPrint();
  }

  // username:String = '';
  // displayDetail:boolean = false;
  // forArray = [];
  // index:number = -1;
  //
  // onButtonClick(){
  //   this.username = '';
  // }
  //
  // displayDetails(){
  //   this.forArray.push('The button was clicked.');
  //   this.displayDetail = !this.displayDetail;
  //   this.index++;
  // }

  // tellChildren(incNum: number){
  //   console.log(incNum);
  //   if(incNum%2 == 0){
  //     this.even.push(incNum);
  //   }else{
  //     this.odd.push(incNum);
  //   }
  // }
}
