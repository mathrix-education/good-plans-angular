import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Endpoint} from '@mathrix-education/iridium';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Endpoint<User> {

  constructor(http: HttpClient, @Inject(BaseUrl) url) {
    super(http, url, 'user');
  }
}
