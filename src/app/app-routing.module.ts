import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GenericListComponent } from "./components/generic-list/generic-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: GenericListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
