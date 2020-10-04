import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { Credentials } from "../models/credentials.model";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public user: any;

  constructor(private readonly _angularFireAuthentication: AngularFireAuth) {
    console.log("Authentication Service created");
  }

  createAccount(credentials) {
    return new Promise((resolve, reject) => {
      this._angularFireAuthentication
        .createUserWithEmailAndPassword(
          credentials.emailAddress,
          credentials.password
        )
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  }

  login(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this._angularFireAuthentication
        .signInWithEmailAndPassword(
          credentials.emailAddress,
          credentials.password
        )
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  }

  loginWithGoogle(provider) {
    return new Promise((resolve, reject) => {
      this._angularFireAuthentication.signInWithPopup(provider).then(
        (result) => resolve(result),
        (error) => reject(error)
      );
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      if (this.isUserLoggedIn()) {
        this._angularFireAuthentication.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

  isUserLoggedIn() {
    return true;
  }

  setCurrentUser(user) {
    this.user = user;
  }
}
