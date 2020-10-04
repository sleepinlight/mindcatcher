import { Component, OnInit } from "@angular/core";
import { LinkprocessorService } from "./linkprocessor.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "mindcatcher";
  focusedUrl: string;
  loading: boolean = false;
  stagedFragments: any[] = [];
  fragmentId: number = 1;

  constructor(private linkProcessor: LinkprocessorService) {}

  ngOnInit() {}

  getMetadata() {
    if (this.focusedUrl) {
      // this.linkProcessor.processLink(this.focusedUrl).subscribe((res) => {
      //   console.log(
      //     this.stagedFragments.push(this.getMetaContent(this.processHTML(res)))
      //   );
      // });
      this.linkProcessor.textOtherExp(this.focusedUrl).subscribe((res) => {
        console.log(res);
        // this.stagedFragments.push(this.onSetupFragment(res.result));
      });
    }
  }

  onSetupFragment(ogData) {
    if (ogData) {
      this.fragmentId += 1;
      return {
        id: this.fragmentId,
        title: ogData.ogTitle || ogData.ogSiteName || "",
        url: ogData.ogUrl || "",
        originalUrl: ogData.requestUrl || this.focusedUrl || "",
        img: ogData.ogImage ? ogData.ogImage.url : "",
      };
    }
  }

  // getMetaContent(html) {
  //   return {
  //     Title: html.getElementsByTagName("title")[0].innerText,
  //     OriginalUrl: this.focusedUrl,
  //     Image: this.formatImage(html),
  //   };
  //   // debugger;
  //   // let test = html.getElementsByTagName("title");
  //   // debugger;
  //   // return html
  //   //   .filter((index, tag) => tag && tag.name && tag.name == name)
  //   //   .attr("content");
  // }

  // processHTML(str) {
  //   var parser = new DOMParser();
  //   var doc = parser.parseFromString(str, "text/html");
  //   console.log(doc);
  //   console.log(doc.head);
  //   return doc.head;
  // }

  // assignProps() {}

  // formatImage(html) {
  //   let baseUrl = this.domain_from_url(this.focusedUrl);
  //   if (!this.findImage(html).includes(baseUrl)) {
  //     console.log(baseUrl + this.findImage(html));
  //     return `https://${baseUrl}${this.findImage(html)}`;
  //   } else {
  //     return this.findImage(html);
  //   }
  // }

  // findImage(html) {
  //   if (html.querySelector('[rel="image_src"]')) {
  //     return html.querySelector('[rel="image_src"]').getAttribute("href");
  //   } else if (html.querySelector('[itemprop="image"]')) {
  //     return html.querySelector('[itemprop="image"]').getAttribute("content");
  //   }
  // }

  // domain_from_url(url) {
  //   var result;
  //   var match;
  //   if (
  //     (match = url.match(
  //       /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
  //     ))
  //   ) {
  //     result = match[1];
  //     if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
  //       result = match[1];
  //     }
  //   }
  //   return result;
  // }
}
