import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";
import {Page3Component} from "./pages/page3/page3.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";

/*== list of route ==*/
const routes: Routes = [
  {
    path: 'page-1',
    component: Page1Component
  },
  {
    path: 'page-2',
    component: Page2Component
  },
  {
    path: 'page-3',
    component: Page3Component
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
