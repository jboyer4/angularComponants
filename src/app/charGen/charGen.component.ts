import { Component } from "@angular/core";
import { Attributes, Character } from "./character";

@Component({
    selector: 'char-gen',
    templateUrl: './charGen.component.html',
    styleUrls: ['./charGen.component.css'],
})
export class charGen {
    title = 'character-generator';
    public charClass?: string;
    public values = [0, 0, 0, 0, 0, 0];
    private classes =
        ['artificer',
            'barbarian',
            'bard',
            'cleric',
            'druid',
            'fighter',
            'monk',
            'rogue',
            'warlock',
            'sorcerer',
            'wizard',
        ];
    constructor() {
    }
    public newChar(): Character {
        const stats: Attributes = {
            strength: this.rollAttribute(),
            dexterity: this.rollAttribute(),
            constitution: this.rollAttribute(),
            intelligence: this.rollAttribute(),
            wisdom: this.rollAttribute(),
            charisma: this.rollAttribute(),
        };
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        return new Character(stats, randomClass);
    }
    private rollAttribute(): number {
        const rolls = [];
        for (let i = 0; i < 3; i++) {
            rolls.push(Math.floor(Math.random() * 20) + 1);
        }
        return Math.max(...rolls);
    }

}


