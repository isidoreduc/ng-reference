import { Component, OnInit, OnChanges, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() clickedRating: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick() {
    this.clickedRating.emit(`The rating ${this.rating} was clicked`);
  }
}
