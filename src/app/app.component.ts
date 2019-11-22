// import statement to be imported to used for the class
import { Component } from "@angular/core";

// here the MetaData in the form of a decorator(component decorator)
// offer simple way to add meta information to a class. Decorator are marked by starting with @
// inform angular its not a plane class but a decorator
// contain both the metadata and the template which support the view
// to create a new component: 'ng g(g for generate) c(component) name' in terminal
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// class called app component only contain one property which is the title (No Methods contain)
export class AppComponent {
  title = "AAA";
}
