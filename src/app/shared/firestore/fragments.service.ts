import { Injectable } from "@angular/core";
import { CoreEnvironment } from "@angular/compiler/src/compiler_facade_interface";
import { of, Observable } from "rxjs";

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FragmentsService {
  constructor(private db: AngularFirestore) {}

  testService(): Observable<any> {
    return of(
      this.db.collection("users").add({
        first: "Mae",
        last: "Carter",
        age: 3,
      })
    );
  }
}
