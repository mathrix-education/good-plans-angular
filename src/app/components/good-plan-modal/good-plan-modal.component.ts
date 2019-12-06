import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-plan-modal',
  templateUrl: './good-plan-modal.component.html',
  styleUrls: ['./good-plan-modal.component.scss']
})
export class GoodPlanModalComponent implements OnInit {

  step = 1;

  remark: string;
  constructor() { }

  ngOnInit() {
  }

}
