import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";
import { GenericListComponent } from "./generic-list/generic-list.component";
import { GenericServiceService } from "../services/generic-service.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "../filter.pipe";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./search/search.component";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [GenericListComponent],
  declarations: [GenericListComponent, FilterPipe, SearchComponent],
  providers: [GenericServiceService]
})
export class ComponentsModule {}
