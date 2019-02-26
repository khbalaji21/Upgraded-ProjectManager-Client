import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserApiService } from '../shared/user-api.service';
import { User } from '../model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  userAPI: Array<User>;
  user: User = new User();

  constructor(private userService: UserApiService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(data => {
      this.userAPI = data;
    });
    return this.userAPI;
  }

  adduser(formData: any) {
    formData.Id = 0;
    this.userService.post(formData).subscribe(
      result => {
        alert("The new user is added successfully");
        this.gotoList();
      });
  }

  update(formData: any) {
    formData.Id = this.user.Id;
    this.userService.put(formData).subscribe(
      result => {
        alert("The User information is updated successfully");
        this.gotoList();
      }
    );
  }

  delete(user: User) {
    this.userService.delete(user);
    alert("The User information is deleted successfully")
    this.gotoList();
  }

  edit(user: User, addeditBtn: HTMLInputElement) {
    addeditBtn.innerText = "Update";
    this.user = user;
  }

  gotoList() {
    this.router.navigate(['']);
  }

  onSubmit(frm: any, addeditBtn: HTMLInputElement) {
    if (addeditBtn.innerText === "Update") {
      this.update(frm);
    }
    else {
      this.adduser(frm);
    }
  }

}
