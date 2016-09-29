import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { Hero } from "./common/hero";
import { DisplayingDataComponent } from "./displayingData/displaying-data.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent
    ],
    providers:[
        DisplayingDataComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }


