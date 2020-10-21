import { Injectable } from "@angular/core";
import { CoreEnvironment } from "@angular/compiler/src/compiler_facade_interface";
import { of, Observable, from } from "rxjs";

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FragmentsService {
  constructor(private db: AngularFirestore) {}

  testService(): Observable<any> {
    return from(
      this.db.collection("users").add({
        first: "Mae",
        last: "Carter",
        age: 3
      })
    );
  }

  testGetService(): Observable<any> {
    return from(this.db.collection("users").get());
  }
}
