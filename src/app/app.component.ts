import { BuiltinTypeName } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tip-calculator';
  amount: number;
  // CUSTOM VALUE
  customValue: number;
  // CUSTOM VALUE
  selectedAmount: number = 0;
  tipAmounts: (string | number)[] = [5, 10, 15, 25, 50];
  numberOfPeople: number = 1;
  calculatedAmount: number = 0;
  calculatedTotalAmount = 0;
  wrongAction: boolean;

  selectTip($event: any) {
    if (this.amount != null) {
      let tip = $event.target.id;
      this.selectedAmount = Number((this.amount * (tip / 100)).toFixed(2));
      this.calculatedAmount = Number(
        Number(this.selectedAmount / this.numberOfPeople).toFixed(2)
      );
      this.calculatedTotalAmount = Number(
        (
          (Number(this.selectedAmount) + Number(this.amount)) /
          this.numberOfPeople
        ).toFixed(2)
      );
    } else {
      console.log('Enter Bill Amount');
      this.wrongAction = true;
      setTimeout(() => {
        this.wrongAction = false;
      }, 2000);
    }
  }
  numPeople() {
    this.numberOfPeople = this.numberOfPeople;
  }

  customValueChange($event: any) {
    this.customValue = $event.target.value;
    this.selectedAmount = this.customValue;

    this.selectedAmount = Number(
      (this.amount * (this.selectedAmount / 100)).toFixed(2)
    );
    this.calculatedAmount = Number(
      Number(this.selectedAmount / this.numberOfPeople).toFixed(2)
    );
    this.calculatedTotalAmount = Number(
      (
        (Number(this.selectedAmount) + Number(this.amount)) /
        this.numberOfPeople
      ).toFixed(2)
    );
  }

  constructor() {}
}
