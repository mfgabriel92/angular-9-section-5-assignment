import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onIntervalFired(number: number) {
    number % 2 === 0 ? this.evens.push(number) : this.odds.push(number);
  }
}
