import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisplayingData }   from './displayingData/displaying-data.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        DisplayingData
    ],
    bootstrap:    [ DisplayingData ]
})

export class AppModule { }


