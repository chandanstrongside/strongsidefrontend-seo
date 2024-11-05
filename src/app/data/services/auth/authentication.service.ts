import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Menu, SessionUser, UserAccess } from '../../models/auth/session-user';
import { environment } from './../../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	public currentUser: Observable<SessionUser>;
	private currentUserSubject: BehaviorSubject<SessionUser>;

	constructor(private http: HttpClient) {
		// const user = sessionStorage.getItem('__qu__');
		const user = localStorage.getItem('__qu__');
		this.currentUserSubject = user && user != 'undefined' ? new BehaviorSubject<SessionUser>(
			JSON.parse(user!)
		) : new BehaviorSubject<SessionUser>(new SessionUser);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): SessionUser {
		return this.currentUserSubject.value;
	}

	public get packagePaid(): boolean {
		return this.currentUserSubject.value?.isPackagePaid;
	}

	public get demoUser(): boolean {
		return this.currentUserSubject.value.isDemoAccount;
	}

	login(username: string, password: string) {
		return this.http.post<any>(`login`, { username, password }).pipe(
			map((user) => {
				// login successful
				if (user) {
					//sessionStorage.setItem('__qu__', JSON.stringify(user.value));
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	remeberLogin(userType: string, email: string) {
		return this.http.get<any>(`login-remember?userType=` + userType + '&email=' + email).pipe(
			map((user) => {
				// login successful
				if (user) {
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	legacyLogin(username?: string) {
		return this.http.post<any>(`legacy-login`, { username }).pipe(
			map((user) => {
				//legacy login successful
				if (user) {
					localStorage.setItem('__qu__', JSON.stringify(user.value));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	signUp(model: any) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		};
		return this.http.post<any>('register', model, httpOptions);
	}

	verifyEmail(UID: string, AID: string) {
		return this.http
			.get<any>('email-verify?UID=' + UID + '&AID=' + AID)
			.pipe(map((resp) => resp));
	}

	acceptInvite(UID: string, AID: string) {
		return this.http
			.get<any>('accept-invite?UID=' + UID + '&AID=' + AID)
			.pipe(map((resp) => resp));
	}

	changePass(model: any) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		};
		return this.http.post<any>('change-password', model, httpOptions);
	}
	sendOTPToEmail(email: any) {
		return this.http
			.get<any>('otp-sending?email=' + email)
			.pipe(map((resp) => resp));
	}
	checkOtp(otp: any, email: any) {
		return this.http
			.get<any>('check-otp?otp=' + otp + '&email=' + email)
			.pipe(map((resp) => resp));
	}
	resetPassword(model: any) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		};
		return this.http.post<any>('reset-password', model, httpOptions);
	}

	fansSignup(model: any) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		};
		return this.http.post<any>('fan-accont-register', model, httpOptions);
	}

	playerAttendanceEventRegistration(formData: any) {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
		return this.http.post<any>('playerUser-attendance-event-registration', formData, httpOptions).pipe(
			map((user) => {
				// login successful
				if (user) {
					//sessionStorage.setItem('__qu__', JSON.stringify(user.value));
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	playerAttendanceEventlogin(username: string, password: string) {
		return this.http.post<any>(`login`, { username, password }).pipe(
			map((user) => {
				// login successful
				if (user) {
					//sessionStorage.setItem('__qu__', JSON.stringify(user.value));
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	emailVerifyOtp(otp: any, email: any) {
		return this.http
			.get<any>('email-verify-otp?otp=' + otp + '&email=' + email)
			.pipe(map((resp) => resp));
	};

	cancelPackageSubcription(subscriptionId: string) {
		return this.http.get<any>('cancel-package-subscriptions?subscriptionId=' + subscriptionId).pipe(map(resp => resp));
	};

	//**************Start Marketing user Sign up****************//
	sendMarketingUserSignupOTP(email: any, accountCode: string) {
		return this.http
			.get<any>('mrk-user-registration?email=' + email + '&accountCode=' + accountCode)
			.pipe(map((resp) => resp));
	};
	savePassword(userId: string, password: string) {
		return this.http
			.get<any>('save-password?userId=' + userId + '&password=' + password)
			.pipe(map((resp) => resp));
	};


	googlelogin(username: string) {
		return this.http.post<any>(`google-login?username=`, { username }).pipe(
			map((user) => {
				// login successful
				if (user) {
					//sessionStorage.setItem('__qu__', JSON.stringify(user.value));
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	fanLogin(username: string, password: string, confirmPassword: string) {
		return this.http.post<any>(`fan-login`, { username, password, confirmPassword }).pipe(
			map((user) => {
				// login successful
				if (user) {
					//sessionStorage.setItem('__qu__', JSON.stringify(user.value));
					localStorage.setItem('__qu__', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

	//**************End Marketing user Sign up****************//



	public checkUserAccess(url: string) {
		let access = new UserAccess();
		const currentUser = localStorage.getItem('__qu__');
		if (currentUser) {
			access.userName = JSON.parse(currentUser).userName;
			access.userType = JSON.parse(currentUser).userType;
			access.isDemoAccount = JSON.parse(currentUser).isDemoAccount;

			let menus = JSON.parse(currentUser).menus;
			if (menus != null && menus.length > 0) {
				menus.forEach((element: Menu) => {
					if (element.path == url || (element.path && url.includes(element.path)) || (url.includes('offense') && element.path?.includes('offense'))) {
						access.aceess = true;
						access.view = element.viewAccess;
						access.full = element.fullAccess;
						return;
					}
					if (element.children && element.children.length > 0) {
						element.children.forEach(value => {
							if (value.path == url || (value.path && url.includes(value.path))) {
								access.aceess = true;
								access.view = value.viewAccess;
								access.full = value.fullAccess;
								return;
							}
						});
					}
				});
			}
		}
		return access;
	};

	getPackageDetailsByLogin() {
		return this.http.get<any>('package-details-login').pipe(map(resp => resp));
	};

	clgUsrRegistration(model: any) {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
		return this.http.post<any>('college-user-register', model, httpOptions);
	};

	information(dta: any) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		};
		return this.http.post<any>('player-information', dta, httpOptions);
	}
}
