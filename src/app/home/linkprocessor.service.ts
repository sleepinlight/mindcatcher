import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LinkprocessorService {
  constructor(private http: HttpClient) {}

  processLink(inputLink): Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${inputLink}`, {
      responseType: "text",
    });
  }

  textExp(reqUrl): Observable<any> {
    return this.http.post("http://localhost:3000/url-processor", {
      urlStr: reqUrl,
    });
    // return this.http.get("http://localhost:3000/url-processor");
  }

  textOtherExp(reqUrl): Observable<any> {
    return this.http.post("http://localhost:3000/meta-processor", {
      urlStr: reqUrl,
    });
    // return this.http.get("http://localhost:3000/url-processor");
  }
}
