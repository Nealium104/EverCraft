import "./App.css";
import {
  PlayerCharacter,
  Skills,
  Alignment,
  InventoryItem,
} from "../src/gameLogic/Character";

const App = () => {
  // Instantiate a new character
  const skills = new Skills(); // Assuming Skills is a class with a default constructor
  const inventory: InventoryItem[] = []; // Start with an empty inventory

  const character = new PlayerCharacter(
    "Aragorn",
    15,
    40,
    8,
    30,
    16,
    14,
    13,
    12,
    10,
    11,
    skills,
    inventory,
    Alignment.NeutralGood
  );

  return (
    <div>
      <h1>Character: {character.name}</h1>
      <p>Armor Class: {character.ArmorClass}</p>
      <p>Health Points: {character.HealthPoints}</p>
      <p>Hit Dice: {character.HitDice}</p>
      {/* Display other character properties as needed */}
    </div>
  );
};

export default App;
