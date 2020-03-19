import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({ templateUrl: 'account.component.html' })
export class AccountComponent implements OnInit {
    accountForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        
    }

    ngOnInit() {
        this.accountForm = this.formBuilder.group({
            firstName: ['John', Validators.required],
            lastName: ['Doe', Validators.required],
            username: ['jdoe', Validators.required],
            email: ['temp@uregina.ca', Validators.required],
            password: ['password', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.accountForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.accountForm.invalid) {
            return;
        }

        
    }
}