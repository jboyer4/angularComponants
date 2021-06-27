import { Component, Input } from "@angular/core";
import { Character } from "../charGen/character";

@Component({
    selector: 'char-display',
    templateUrl: './charDisplay.component.html',
    styleUrls: ['./charDisplay.component.css'],
})
export class charDisplay {
    @Input() character?: Character;
    constructor() {

    }
}