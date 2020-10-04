import { Component, OnInit } from '@angular/core';
import { Credentials } from '../shared/models/credentials.model';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { from } from 'rxjs';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
	credentials: Credentials = {
		emailAddress: '',
		password: '',
	};
	constructor(public authService: AuthenticationService) {}

	ngOnInit() {}

	createAccount(credentials: Credentials) {
		from(this.authService.createAccount(credentials)).subscribe((res) => {
			console.log(res);
		});
	}

	fieldsAreValid(credentials) {
		return credentials.emailAddress.length && credentials.password.length;
	}

	// login() {
	// 	this.authService.loginWithGoogle(new auth.GoogleAuthProvider());
	// }
	logout() {
		this.authService.logout();
	}
}
