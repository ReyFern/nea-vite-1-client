import Navbar from '../components/Navbar';
import '../App.css';
import Character from '../classes/Character.tsx';

export default function CreateCharacter() {
    const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

    function bubbleSort(array:number[]): number[] {
        var temp = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < (array.length - i - 1); j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    function modifiers(statScores:{[id:string]:number}): {[id:string]:number} {
        let statMods:{[id: string]:number} = {
            "strength": 0, 
            "dexterity": 0, 
            "constitution": 0, 
            "intelligence": 0, 
            "wisdom": 0, 
            "charisma": 0
        };
        for (let i = 0; i < Object.keys(statMods).length; i++) {
            if (statScores[Object.keys(statScores)[i]] < 10) {
                statMods[Object.keys(statMods)[i]] = Math.floor((statScores[Object.keys(statScores)[i]] - 10) / 2);
            }
            else {
                statMods[Object.keys(statMods)[i]] = Math.floor((statScores[Object.keys(statScores)[i]] - 10) / 2);
            }
        }
        return statMods;
    }
    function modifier(statScore:number): number {
        let modifier:number = 0;
        if (statScore < 10) {
            modifier = Math.floor((statScore - 10) / 2);
        }
        else {
            modifier = Math.floor((statScore - 10) / 2);
        }
        return modifier;
    }

    function roll3d6(): number {
        var abilityScore = 0;
        for (let i = 0; i < 3; i++){
            abilityScore += Math.floor(Math.random() * 6) + 1;
        }
        return abilityScore;
    }

    function roll4d6DropLowest(): number {
        var abilityScore = 0;
        var dice = [0, 0, 0, 0];
        for (let i = 0; i < dice.length; i++){
            dice[i] = Math.floor(Math.random() * 6) + 1;
        }
        dice[dice.indexOf(Math.min(...dice))] = 0;
        for (let i = 0; i < dice.length; i++) {
            abilityScore += dice[i];
        }
        return abilityScore;
    }

    function roll5d6DropMiddle(): number {
        var abilityScore = 0;
        var dice = [0, 0, 0, 0, 0];
        for (let i = 0; i < dice.length; i++){
            dice[i] = Math.floor(Math.random() * 6) + 1;
        }
        var sortedDice = bubbleSort(dice);
        sortedDice[2] = 0;
        for (let i = 0; i < dice.length; i++) {
            abilityScore += dice[i];
        }
        return abilityScore;
    }

    let character = new Character();

    return (
        <div>
            <Navbar/>
            <h4>What's your name, race, class & level?</h4>
            <input type="text" id="name" name="name" placeholder="Character Name"/><br/><br/>
            <label htmlFor="level">Level: </label>
            <select id="level" name="level">
                {[...Array(20).keys()].map((k)=><option value={k+1} key={k+1}>{k+1}</option>)}
            </select>
            <br/><br/>
            <label htmlFor="class">Class: </label>
            <select id="class" name="class">
                {[...classes].map((k)=><option value={k} key={k}>{k}</option>)}
            </select><br/><br/><br/><br/>

            <label htmlFor="strength">Strength: </label>
            <input type="number" id="strength" name="strength" value={character.getStrength()} className="input-num"/>

            <label htmlFor="dexterity">Dexterity: </label>
            <input type="number" id="dexterity" name="dexterity" value={character.getDexterity()} className="input-num"/>

            <label htmlFor="constitution">Constitution: </label>
            <input type="number" id="constitution" name="constitution" value={character.getConstitution()} className="input-num"/><br/><br/>

            <label htmlFor="intelligence">Intelligence: </label>
            <input type="number" id="intelligence" name="intelligence" value={character.getIntelligence()} className="input-num"/>

            <label htmlFor="wisdom">Wisdom: </label>
            <input type="number" id="wisdom" name="wisdom" value={character.getWisdom()} className="input-num"/>

            <label htmlFor="charisma">Charisma: </label>
            <input type="number" id="charisma" name="charisma" value={character.getCharisma()} className="input-num"/><br/><br/>

            <button
            onClick={function roll() {
                var rollMethod = (document.getElementById("rollMethod") as HTMLInputElement).value;
                if (rollMethod == "3d6"){
                    character.setStrength(roll3d6());
                    character.setDexterity(roll3d6());
                    character.setConstitution(roll3d6());
                    character.setIntelligence(roll3d6());
                    character.setWisdom(roll3d6());
                    character.setCharisma(roll3d6());
                }
                else if (rollMethod == "4d6-drop-lowest") {
                    character.setStrength(roll4d6DropLowest());
                    character.setDexterity(roll4d6DropLowest());
                    character.setConstitution(roll4d6DropLowest());
                    character.setIntelligence(roll4d6DropLowest());
                    character.setWisdom(roll4d6DropLowest());
                    character.setCharisma(roll4d6DropLowest());
                }
                else if (rollMethod == "5d6-drop-middle") {
                    character.setStrength(roll5d6DropMiddle());
                    character.setDexterity(roll5d6DropMiddle());
                    character.setConstitution(roll5d6DropMiddle());
                    character.setIntelligence(roll5d6DropMiddle());
                    character.setWisdom(roll5d6DropMiddle());
                    character.setCharisma(roll5d6DropMiddle());
                }
                else if (rollMethod == "1d20") {
                    character.setStrength(Math.floor(Math.random() * 20) + 1);
                    character.setDexterity(Math.floor(Math.random() * 20) + 1);
                    character.setConstitution(Math.floor(Math.random() * 20) + 1);
                    character.setIntelligence(Math.floor(Math.random() * 20) + 1);
                    character.setWisdom(Math.floor(Math.random() * 20) + 1);
                    character.setCharisma(Math.floor(Math.random() * 20) + 1);
                }
                else if (rollMethod == "manual") {
                    character.setStrength(0);
                    character.setDexterity(0);
                    character.setConstitution(0);
                    character.setIntelligence(0);
                    character.setWisdom(0);
                    character.setCharisma(0);
                }

                (document.getElementById("strength") as HTMLInputElement).value = String(character.getStrength());
                (document.getElementById("dexterity") as HTMLInputElement).value = String(character.getDexterity());
                (document.getElementById("constitution") as HTMLInputElement).value = String(character.getConstitution());
                (document.getElementById("intelligence") as HTMLInputElement).value = String(character.getIntelligence());
                (document.getElementById("wisdom") as HTMLInputElement).value = String(character.getWisdom());
                (document.getElementById("charisma") as HTMLInputElement).value = String(character.getCharisma());
            }}
            className='roll-button'>Roll</button>
            <select id="rollMethod" name="rollMethod">
                <option value="3d6" key="3d6">3d6</option>
                <option value="4d6-drop-lowest" key="4d6-drop-lowest">4d6 drop lowest</option>
                <option value="5d6-drop-middle" key="5d6-drop-middle">5d6 drop middle</option>
                <option value="1d20" key="1d20">1d20</option>
                <option value="manual" key="manual">Manual input</option>
            </select><br/><br/><br/><br/>
            <label htmlFor='hitPoints'>HP:</label>
            <input type="number" id="hitPoints" value="0" className='input-num'/>
            <button>Roll</button>
            <button>Average</button>
            <button>Max</button>
        </div>
    );
}