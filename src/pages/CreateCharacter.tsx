import Navbar from '../components/Navbar';
import '../App.css';
import Character from '../classes/Character.tsx';

export default function CreateCharacter() {
    const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    let stats = {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0};

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
            <input type="number" id="strength" name="strength" value={stats.strength.toString()} className="input-num"/>

            <label htmlFor="dexterity">Dexterity: </label>
            <input type="number" id="dexterity" name="dexterity" value={stats.dexterity.toString()} className="input-num"/>

            <label htmlFor="constitution">Constitution: </label>
            <input type="number" id="constitution" name="constitution" value={stats.constitution.toString()} className="input-num"/><br/><br/>

            <label htmlFor="intelligence">Intelligence: </label>
            <input type="number" id="intelligence" name="intelligence" value={stats.intelligence.toString()} className="input-num"/>

            <label htmlFor="wisdom">Wisdom: </label>
            <input type="number" id="wisdom" name="wisdom" value={stats.wisdom.toString()} className="input-num"/>

            <label htmlFor="charisma">Charisma: </label>
            <input type="number" id="charisma" name="charisma" value={stats.charisma.toString()} className="input-num"/><br/><br/>

            <button>Roll</button>
            <select id="rollMethod" name="rollMethod">
                <option value="3d6" key="3d6">3d6</option>
                <option value="4d6-drop-lowest" key="4d6-drop-lowest">4d6 drop lowest</option>
                <option value="5d6-drop-middle" key="5d6-drop-middle">4d6 drop middle</option>
                <option value="manual" key="manual">Manual input</option>
            </select>
        </div>
    );
}