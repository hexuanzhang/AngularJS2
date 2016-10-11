import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisplayingData }   from './displayingData/displaying-data.component';
import { UserInputComponent }   from './userInput/userInput.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        UserInputComponent
    ],
    bootstrap:    [ UserInputComponent ]
})

export class AppModule { }


