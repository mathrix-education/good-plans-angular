import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  opened = false;

  form = {email: '', password: ''};

  plan: any;

  constructor(private authentication: AuthenticationService,
              private plansService: PlanService) {
  }

  ngOnInit() {
    this.plansService.list().subscribe(t => {
      console.log(t);
      this.plan = t.data[0];
      console.log(this);
    });
  }

  login() {
    this.authentication.login(this.form).subscribe();
  }


}
