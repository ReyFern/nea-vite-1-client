import Navbar from '../components/Navbar';
import '../App.css';
import Character from '../classes/Character.tsx';

export default function CreateCharacter() {
    const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

    function roll3d6(): number {
        var abilityScore = 0;
        for (let i = 0; i < 3; i++){
            abilityScore += Math.floor(Math.random() * 6) + 1;
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

                (document.getElementById("strength") as HTMLInputElement).value = String(character.getStrength());
                (document.getElementById("dexterity") as HTMLInputElement).value = String(character.getDexterity());
                (document.getElementById("constitution") as HTMLInputElement).value = String(character.getConstitution());
                (document.getElementById("intelligence") as HTMLInputElement).value = String(character.getIntelligence());
                (document.getElementById("wisdom") as HTMLInputElement).value = String(character.getWisdom());
                (document.getElementById("charisma") as HTMLInputElement).value = String(character.getCharisma());
            }}
            >Roll</button>
            <select id="rollMethod" name="rollMethod">
                <option value="3d6" key="3d6">3d6</option>
                <option value="4d6-drop-lowest" key="4d6-drop-lowest">4d6 drop lowest</option>
                <option value="5d6-drop-middle" key="5d6-drop-middle">4d6 drop middle</option>
                <option value="manual" key="manual">Manual input</option>
            </select>
        </div>
    );
}