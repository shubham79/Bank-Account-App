import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { fromEvent } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  tap
} from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchText = "";
  @Input() placeholderText: string;
  @Output() searchTextEmitter = new EventEmitter<string>();
  @ViewChild("searchInput", { static: true }) searchInput: ElementRef;
  constructor() {}

  ngOnInit() {
    this.bindSearchInputDebounce();
  }

  bindSearchInputDebounce() {
    fromEvent(this.searchInput.nativeElement, "keyup")
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        filter(res => {
          if (res && res.length >= 2) {
            return true;
          } else if (res == "") {
            return true;
          } else {
            return false;
          }
        }),
        debounceTime(1000), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 1000ms
        distinctUntilChanged() // This operator will eliminate duplicate values
      )
      .subscribe(text => {
        console.info("Text value for emit --->>>", text);
        this.searchTextEmitter.emit(text);
      });
  }
}
