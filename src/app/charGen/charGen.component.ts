import { Component } from "@angular/core";

@Component({
    selector: 'char-gen',
    templateUrl: './charGen.component.html',
    styleUrls: ['./charGen.component.css'],
})
export class charGen {
    title = 'character-generator';
    public charClass?: string;
    public stats = [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma',
    ];
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
    private sample(items) {
        items[Math.floor(Math.random() * items.length)];
    }
    public newChar() {

    }

}


