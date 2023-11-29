import {
  Character,
  PlayerCharacter,
  Skills,
  Alignment,
  Item,
  Weapon,
  InventoryItem,
} from "../gameLogic/Character";

describe("Character Class Tests", () => {
  it("should create a new character with correct attributes", () => {
    const skills: Skills = new Skills();
    const inventory: InventoryItem[] = [];

    const character = new Character(
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

    expect(character.name).toBe("Aragorn");
    expect(character.Alignment).toBe(Alignment.NeutralGood);
    // Add more assertions as needed
  });

  it("should add items to a player character inventory", () => {
    const skills: Skills = new Skills();
    const inventory: InventoryItem[] = [];

    const playerCharacter = new PlayerCharacter(
      "Legolas",
      17,
      35,
      10,
      35,
      12,
      20,
      14,
      15,
      11,
      12,
      skills,
      inventory
    );

    const bow: Weapon = {
      name: "Elven Bow",
      description: "A finely crafted elven bow.",
      weight: 2,
      damage: "1d8",
      weaponType: "Bow",
    };

    playerCharacter.Inventory.push({ item: bow, quantity: 1 });

    expect(playerCharacter.Inventory.length).toBe(1);
    expect(playerCharacter.Inventory[0].item.name).toBe("Elven Bow");
    // Add more assertions as needed
  });

  // Additional tests can be added here, such as testing ability checks, leveling up, etc.
});
