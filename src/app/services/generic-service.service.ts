import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GenericServiceService {
  constructor(private httpClient: HttpClient) {}

  fetchBankAccounts() {
    const url = "http://starlord.hackerearth.com/bankAccount";
    return this.httpClient.get(url).pipe(
      map(data => {
        //  console.log(data);
        return data;
      })
    );
  }
}
