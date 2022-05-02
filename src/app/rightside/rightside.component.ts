import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss'],
})
export class RightsideComponent implements OnInit {

  @Input() amount: number;
  @Input() selectedAmount: number;
  @Input() numberOfPeople: number;
  @Input() calculatedAmount: number;
  @Input() calculatedTotalAmount: number;
  @Input() wrongAction: boolean;


  reset() {
    this.amount = 0;
    this.selectedAmount = 0;
    this.numberOfPeople = 1;
    this.calculatedAmount = 0;
    this.calculatedTotalAmount = 0;
    this.wrongAction = false;
  }

  constructor() {}
  ngOnInit(): void {}
}
