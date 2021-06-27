
export type Attributes = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type Skills = {
    acrobatics?: number;
    animalHandling?: number;
    arcana?: number;
    athletics?: number;
    deception?: number;
    history?: number;
    insight?: number;
    intimidation?: number;
    investigation?: number;
    medicine?: number;
    nature?: number;
    perception?: number;
    performance?: number;
    persuasion?: number;
    religion?: number;
    slightOfHand?: number;
    stealth?: number;
    survival?: number;
}
export class character {
    public attributes: Attributes;
    public charClass: string;
    public proficiencies?: Skills;
    public proficiencyBonus?: number;
    public maxhp?: number;
    constructor(attributes: Attributes, charClass: string, proficiencies?: Skills, level?: number) {
        this.attributes = attributes;
        this.charClass = charClass;
        this.proficiencies = proficiencies ?? {};
    }
}