import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() startGame = new EventEmitter<number>();
  intID:number;
  num:number = 0;

  gameStarted() {
    this.intID = setInterval(() => {
      this.num++;
      this.startGame.emit(this.num);
    },1000);
  }

  gameStopped() {
    clearInterval(this.intID);
  }

}
