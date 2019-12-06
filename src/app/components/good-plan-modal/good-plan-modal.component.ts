import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-good-plan-modal',
  templateUrl: './good-plan-modal.component.html',
  styleUrls: ['./good-plan-modal.component.scss']
})
export class GoodPlanModalComponent implements OnInit {

  step = 1;

  remark: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate(['/app/profil']);
  }

}
