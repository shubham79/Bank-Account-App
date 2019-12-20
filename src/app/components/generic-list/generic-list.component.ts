import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { GenericServiceService } from "src/app/services/generic-service.service";
import { NgxSpinnerService } from "ngx-spinner";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "app-generic-list",
  templateUrl: "./generic-list.component.html",
  styleUrls: ["./generic-list.component.scss"]
})
export class GenericListComponent implements OnInit {
  constructor(
    private genericServie: GenericServiceService,
    private spinner: NgxSpinnerService
  ) {}
  bankAccounts = [];
  placeholderText = "Search by Account No";
  p: number = 1;
  total: number;
  loading: boolean;
  searchText;

  ngOnInit() {
    this.fetchBankAccounts();
  }

  getSearchText($event) {
    this.searchText = $event;
  }

  fetchBankAccounts() {
    this.spinner.show();
    this.genericServie.fetchBankAccounts().subscribe(
      (res: any) => {
        this.spinner.hide();
        this.bankAccounts = res;
        this.total = this.bankAccounts.length;
      },
      error => {}
    );
  }

  getPage($event) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.p = $event;
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 1000);
  }
}
