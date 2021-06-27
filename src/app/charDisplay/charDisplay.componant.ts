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
        console.log('created');
    }
    public getAttributes(): Array<string> {
        if (!this.character) {
            return [];
        }
        const stats = [];
        for (const [key, value] of Object.entries(this.character.attributes)) {
            stats.push(`${key}: ${value}`);
        }
        return stats;
    }
}