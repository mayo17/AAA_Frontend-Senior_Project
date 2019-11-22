import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule, Routes } from '@angular/router';
import { HomelistComponent } from './components/homelist/homelist.component';
import { ResultlistComponent } from './components/resultlist/resultlist.component';
import { AboutlistComponent } from './components/aboutlist/aboutlist.component';
import { DesignerlistComponent } from './components/designerlist/designerlist.component';
import { SearchlistComponent } from './components/searchlist/searchlist.component';
import { SearchboxComponent } from './components/searchlist/searchbox/searchbox.component';


const appRoutes: Routes = [
  { path: 'designer', component: DesignerlistComponent },
  { path: 'result', component: ResultlistComponent },
  { path: 'home', component: HomelistComponent },
  { path: 'search', component: SearchlistComponent },
  { path: 'about', component: AboutlistComponent },


  //{ path: '**', component: PageNotFoundComponent }    // used to redirect if page doesnt work wildcard
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchboxComponent, HomelistComponent, ResultlistComponent, AboutlistComponent, DesignerlistComponent, SearchlistComponent,],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
