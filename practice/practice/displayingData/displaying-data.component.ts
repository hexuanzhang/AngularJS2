import { Component, OnInit } from '@angular/core';

import { Hero } from "../common/hero";
import { DisplayingDataService } from "./displaying-data.service";

@Component({
    selector: "app",
    templateUrl: "./practice/displayingData/displaying-data.component.html",
    styleUrls: ["./practice/displayingData/displaying-data.component.css"],
    providers:[
        DisplayingDataService
    ]
})

export class DisplayingData implements OnInit{
    myHero: Hero;
    heroes: Hero[];

    constructor (
        private displayingDataService: DisplayingDataService
    ){}

    ngOnInit(): void{
        this.heroes = this.displayingDataService.heroes;
        this.myHero = this.heroes[0];
    }
}


