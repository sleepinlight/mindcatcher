import { Component, OnInit } from "@angular/core";
import { LinkprocessorService } from "../home/linkprocessor.service";
import { take, finalize } from "rxjs/operators";
import { FragmentsService } from "../shared/firestore/fragments.service";

@Component({
  selector: "menu-sidebar",
  templateUrl: "./menu-sidebar.component.html",
  styleUrls: ["./menu-sidebar.component.scss"],
})
export class MenuSidebarComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private linkProcessor: LinkprocessorService,
    private fragmentsService: FragmentsService
  ) {}

  ngOnInit() {}
}
