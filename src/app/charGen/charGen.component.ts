import { Component, Output, EventEmitter } from "@angular/core";
import { Attributes, Character } from "./character";

@Component({
    selector: 'char-gen',
    templateUrl: './charGen.component.html',
    styleUrls: ['./charGen.component.css'],
})
export class charGen {
    //title = 'character-generator';
    @Output() newCharCreated = new EventEmitter<Character>();
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
    public newChar(): void {
        const stats: Attributes = {
            strength: this.rollAttribute(),
            dexterity: this.rollAttribute(),
            constitution: this.rollAttribute(),
            intelligence: this.rollAttribute(),
            wisdom: this.rollAttribute(),
            charisma: this.rollAttribute(),
        };
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        this.newCharCreated.emit(new Character(stats, randomClass));
    }
    private rollAttribute(): number {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        let total = 0;
        const drop = Math.min(...rolls);
        rolls.forEach((roll) => { if (roll != drop) { total += roll } });
        return total;
    }

}


