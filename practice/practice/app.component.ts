import { Component, OnInit } from '@angular/core';

import { Hero } from "./common/hero";
import { DisplayingDataComponent } from "./displayingData/displaying-data.component";

@Component({
    selector: "displaying-data",
    templateUrl: "./practice/displayingData/displaying-data.component.html",
    styleUrls: ["./practice/displayingData/displaying-data.component.css"]
})

export class AppComponent implements OnInit{
    myHero: Hero;
    heroes: Hero[];

    constructor (
        private displayingDataComponent: DisplayingDataComponent
    ){}

    ngOnInit(): void{
        this.myHero = this.displayingDataComponent.myHero;
        this.heroes = this.displayingDataComponent.heroes;
    }
}
