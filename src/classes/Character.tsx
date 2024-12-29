export default class Character {
    public level:number = 0;
    public currentHitPoints:number = 0;
    public equipment:string = "";
    public name:string = "";
    private class:string = "";
    private species:string = "";
    private background:string = "";
    private statScores:{[id: string]:number} = {
        "strength": 0, 
        "dexterity": 0, 
        "constitution": 0, 
        "intelligence": 0, 
        "wisdom": 0, 
        "charisma": 0
    };
    private savingThrows:number[] = [0, 0, 0, 0, 0, 0];
    private passiveWisdom:number = 0;
    private maxHitPoints:number = 0;
    private traits:string = "";
    private feats:string = "";
    private skills:{[id:string]:number} = {
        'acrobatics': 0,
        'animalHandling': 0,
        'arcana': 0,
        'athletics': 0,
        'deception': 0,
        'history': 0,
        'insight': 0,
        'intimidation': 0,
        'investigation': 0,
        'medicine': 0,
        'nature': 0,
        'perception': 0,
        'performance': 0,
        'persuasion': 0,
        'religion': 0,
        'sleightOfHand': 0,
        'stealth': 0,
        'survival': 0
    };

    public setClass(inputClass:string) {
        this.class = inputClass;
    }
    public getClass() {
        return this.class;
    }

    public setSpecies(inputSpecies:string) {
        this.species = inputSpecies;
    }
    public getSpecies() {
        return this.species;
    }

    public setBackground(inputBackground:string) {
        this.background = inputBackground;
    }
    public getBackground() {
        return this.background;
    }

    public getSkills(skill:string) {
        return (this.skills[skill] || this.skills['default']);
    }

    public getStrength() {
        return this.statScores["strength"];
    }
    public setStrength(strength:number) {
        this.statScores["strength"] = strength;
    }

    public getDexterity() {
        return this.statScores["dexterity"];
    }
    public setDexterity(dexterity:number) {
        this.statScores["dexterity"] = dexterity;
    }

    public getConstitution() {
        return this.statScores["constitution"];
    }
    public setConstitution(constitution:number) {
        this.statScores["constitution"] = constitution;
    }

    public getIntelligence() {
        return this.statScores["intelligence"];
    }
    public setIntelligence(intelligence:number) {
        this.statScores["intelligence"] = intelligence;
    }

    public getWisdom() {
        return this.statScores["wisdom"];
    }
    public setWisdom(wisdom:number) {
        this.statScores["wisdom"] = wisdom;
    }

    public getCharisma() {
        return this.statScores["charisma"];
    }
    public setCharisma(charisma:number) {
        this.statScores["charisma"] = charisma;
    }
}