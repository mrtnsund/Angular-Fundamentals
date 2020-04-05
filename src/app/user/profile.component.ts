import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.currentUser?.firstName);
    const lastName = new FormControl(this.authService.currentUser?.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any): void {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
}
