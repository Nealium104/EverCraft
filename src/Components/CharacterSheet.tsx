import { useState } from "react";
import {
  Character,
  Ability,
  Skills,
  InventoryItem,
  Alignment,
} from "../gameLogic/Character"; // Import your character models

const CharacterSheet = () => {
  const [name, setName] = useState<string>("");
  const [armorClass, setArmorClass] = useState<number>(10);
  const [healthPoints, setHealthPoints] = useState<number>(10);
  const [hitDice, setHitDice] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(30);
  const [alignment, setAlignment] = useState<Alignment>(Alignment.LawfulGood);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create a new character instance
    const newCharacter = new Character(
      name,
      armorClass,
      healthPoints,
      hitDice,
      speed,
      new Skills(), // Assuming Skills constructor doesn't require parameters
      [], // Empty inventory for now
      alignment
    );

    // Here you can do something with the newCharacter, like adding it to a list or state
    console.log(newCharacter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Armor Class:</label>
        <input
          type="number"
          value={armorClass}
          onChange={(e) => setArmorClass(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Health Points:</label>
        <input
          type="number"
          value={healthPoints}
          onChange={(e) => setHealthPoints(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Hit Dice:</label>
        <input
          type="number"
          value={hitDice}
          onChange={(e) => setHitDice(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Speed:</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Alignment:</label>
        <select
          value={alignment}
          onChange={(e) => setAlignment(e.target.value)}
        >
          {Object.values(Alignment).map((alignmentOption) => (
            <option key={alignmentOption} value={alignmentOption}>
              {alignmentOption}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Character</button>
    </form>
  );
};

export default CharacterSheet;
