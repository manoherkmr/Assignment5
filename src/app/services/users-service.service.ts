import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { user } from '../models/model';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  account = new Array<user>();

  userList: Observable<Array<user>>
  private _activeUserList: BehaviorSubject<Array<user>>;
  private _inActiveUserList: BehaviorSubject<Array<user>>;
  private _counter: BehaviorSubject<number>;
  private baseUrl: string;


  constructor() {
    this.account.push({ name: "Jack", status: true });
    this.account.push({ name: "Sam", status: true });
    this.account.push({ name: "William", status: false });
    this.account.push({ name: "Bob", status: true });
    this._activeUserList = new BehaviorSubject(this.account.filter(status => status.status == true));
    this._inActiveUserList = new BehaviorSubject(this.account.filter(status => status.status == false));
    this._counter = new BehaviorSubject(0);

  }

  loadActiveUser(): Observable<user[]> {
    return this._activeUserList.asObservable();
  }
  loadInActiveUsers(): Observable<user[]> {
    return this._inActiveUserList.asObservable();
  }
  AddActiveUsers(data: user) {

    let InuserArr: Array<user> = this._inActiveUserList.getValue();
    let userArr: Array<user> = this._activeUserList.getValue();
    InuserArr.forEach((item, index) => {
      if (item === data) { InuserArr.splice(index, 1); }
    });
    userArr.push(data);
    this._activeUserList.next(userArr);
    this._inActiveUserList.next(InuserArr);
    this._counter.next(this._counter.getValue() + 1);
  }
  AddInActiveUsers(data: user) {

    let userArr: Array<user> = this._activeUserList.getValue();
    let InuserArr: Array<user> = this._inActiveUserList.getValue();
     
    userArr.forEach((item, index) => {
      if (item === data) { userArr.splice(index, 1); }
    });
    InuserArr.push(data);
    this._activeUserList.next(userArr);
    this._inActiveUserList.next(InuserArr);
    this._counter.next(this._counter.getValue() + 1);
  }
  getCounter(): BehaviorSubject<number> {
    return this._counter;
  }
}
