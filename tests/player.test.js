const Player = require("../Player"); // Adjust the path according to your file structure

describe("Player", () => {
  it("should create a new player with", () => {
    const player = new Player(
      "Hero",
      "Neutral",
      15, // ArmorClass
      100, // HitPoints
      20, // Strength
      19, // Dexterity
      10, // Constitution
      8, // Wisdom
      2, // Intelligence
      1 // Charisma
    );
    // Test Basic
    expect(player.name).toBe("Hero");
    expect(player.alignment).toBe("Neutral");
    expect(player.ArmorClass).toBe(15);
    expect(player.HitPoints).toBe(100);
    expect(player.Strength).toBe(20);
    expect(player.Dexterity).toBe(19);
    expect(player.Constitution).toBe(10);
    expect(player.Wisdom).toBe(8);
    expect(player.Intelligence).toBe(2);
    expect(player.Charisma).toBe(1);

    // Test Modifiers
    expect(player.strMod).toBe(5);
    expect(player.dexMod).toBe(4);
    expect(player.conMod).toBe(0);
    expect(player.wisMod).toBe(-1);
    expect(player.intMod).toBe(-4);
    expect(player.chaMod).toBe(-5);
  });
});
