import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./practice/userInput/userInput.component.html",
    styleUrls: ["./practice/userInput/userInput.component.css"]
})

export class UserInputComponent {
    eventValue: string = "";
    trvValue: string = "";
    enterValue: string = "";
    blurValue: string = "";

    eventKeyup($event: any): void {
        this.eventValue += $event.target.value + "|";
    }

    // eventKeyup($event: keyboardEvent): void{
    //     this.eventValue += (<HTMLInputElement>$event.target).value + "|";
    // }

    trvKeyup(values: string): void{
        this.trvValue = values;
    }

    keyEnter($event: any): void{
        this.enterValue = $event.target.value;
    }

    blurEvent(values: string): void{
        this.blurValue = values;
    }
}
