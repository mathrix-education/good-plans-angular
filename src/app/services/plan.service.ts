import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Endpoint, ListOptions, ReadOptions} from '@mathrix-education/iridium';
import {Plan} from '../model/plan';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends Endpoint<Plan> {


  constructor(http: HttpClient, @Inject(BaseUrl) url) {
    super(http, url, 'plans');
  }

  read(id: any, options?: ReadOptions<Plan>): any {
    return this.defaultRead(id, options);
  }

  list(options?: ListOptions<Plan>): any {
    return this.defaultList(options);
  }
}
