import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { DisplayingDataComponent } from "./displayingData/displaying-data.service";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }


