import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerComponent} from "./components/customer/customer.component";
import {LoginComponent} from "./components/login/login.component";
import {AccessGuardService} from "./services/guard/access-guard.service";

/*== list of route ==*/
const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"customer",
    component:CustomerComponent,
    canActivate:[AccessGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
