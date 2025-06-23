export const fireAbilities = [
    {
        name: "Meteor Smash",
        type: "FIRE",
        cost: 20,
        damage: 40,
        description: "Pull a meteor from the heavens to deal great fire damage!",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Wall of Flame",
        type: "FIRE",
        cost: 0,
        damage: null,
        description: "Erects a wall of flames to protect against attacks.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectReduction: 30,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Flame Bolt",
        type: "FIRE",
        cost: 2,
        damage: 10,
        description: "A quick bolt of fire that deals minor damage.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 10,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Blazing Aura",
        type: "FIRE",
        cost: 10,
        damage: null,
        description: "Surrounds the user with a fiery aura that damages attackers.",
        category: "UTILITY",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: 5,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Inferno Surge",
        type: "FIRE",
        cost: 15,
        damage: 25,
        description: "Unleashes a surge of fire that targets multiple enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 25,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Heat Wave",
        type: "FIRE",
        cost: 12,
        damage: 15,
        description: "Generates an intense wave of heat that reduces enemy defenses.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 100,
        effectReduction: 10,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Firestorm",
        type: "FIRE",
        cost: 25,
        damage: 35,
        description: "Calls down a storm of fire that engulfs the battlefield.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Scorching Breath",
        type: "FIRE",
        cost: 8,
        damage: 12,
        description: "Breathes a cone of searing heat at the enemy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 12,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Cauterize",
        type: "FIRE",
        cost: 5,
        damage: null,
        description: "Heals minor wounds by cauterizing them with fire.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: null,
        effectReduction: null,
        effectHeal: 15,
        effectIncrease: null
    },
    {
        name: "Flare Up",
        type: "FIRE",
        cost: 3,
        damage: 5,
        description: "A sudden burst of flame that startles and damages the enemy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 5,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Fireball",
        type: "FIRE",
        cost: 10,
        damage: 20,
        description: "Hurls a fiery ball at the enemy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 20,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
];
export const iceAbilities = [
    {
        name: "Frostbite",
        type: "ICE",
        cost: 15,
        damage: 20,
        description: "Bites into the enemy with extreme cold, reducing their speed.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: 20,
        effectReduction: 10,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Glacial Barrier",
        type: "ICE",
        cost: 10,
        damage: null,
        description: "Creates a barrier of ice that absorbs damage and protects the user.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 50,  // Reduces incoming damage by 50%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Ice Shard",
        type: "ICE",
        cost: 5,
        damage: 10,
        description: "Launches a sharp shard of ice at the enemy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 10,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Blizzard",
        type: "ICE",
        cost: 25,
        damage: 30,
        description: "Summons a fierce blizzard to attack all enemies, with a chance to freeze them.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 80,
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Frozen Armor",
        type: "ICE",
        cost: 12,
        damage: null,
        description: "Encases the user in a layer of ice, reducing damage taken.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 40,  // Reduces incoming damage by 40%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Hailstorm",
        type: "ICE",
        cost: 18,
        damage: 25,
        description: "Rains down hailstones on the enemy, with a chance to lower their accuracy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 25,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Icicle Spear",
        type: "ICE",
        cost: 8,
        damage: 12,
        description: "Throws a spear-like icicle that pierces the enemy.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 12,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Snow Cloak",
        type: "ICE",
        cost: 5,
        damage: null,
        description: "Cloaks the user in a veil of snow, making them harder to hit.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Chilling Wind",
        type: "ICE",
        cost: 7,
        damage: 8,
        description: "Blows a chilling wind at the enemy, lowering their attack power.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 15,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Deep Freeze",
        type: "ICE",
        cost: 20,
        damage: 15,
        description: "Attempts to freeze the enemy solid, preventing them from acting.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 1,
        effectChance: 50,
        effectDamage: 15,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
];
export const windAbilities = [
    {
        name: "Gust",
        type: "WIND",
        cost: 10,
        damage: 5,
        description: "A simple burst of wind that deals minor damage.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 60,
        effectDamage: 5,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Cyclone",
        type: "WIND",
        cost: 20,
        damage: 12,
        description: "Creates a swirling cyclone that deals damage and has a chance to immobilize enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 12,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Wind Barrier",
        type: "WIND",
        cost: 15,
        damage: null,
        description: "A protective shield of wind that reduces incoming damage for a short time.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectReduction: 40, // Reduces incoming damage by 40%
    },
    {
        name: "Zephyr Strike",
        type: "WIND",
        cost: 18,
        damage: 10,
        description: "A swift strike carried by the wind, allowing the user to act faster in the next turn.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 10,
    },
    {
        name: "Tempest",
        type: "WIND",
        cost: 25,
        damage: 20,
        description: "Unleashes a violent storm that deals heavy damage to all enemies in range.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 20,
    },
    {
        name: "Breeze of Clarity",
        type: "WIND",
        cost: 12,
        damage: null,
        description: "A refreshing breeze that clears the mind, removing debuffs from the user.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 1,
        effectChance: 100,
    },
    {
        name: "Howling Gale",
        type: "WIND",
        cost: 22,
        damage: 15,
        description: "A powerful gale that disrupts enemies' actions, reducing their effectiveness.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: 15,
    },
    {
        name: "Air Slash",
        type: "WIND",
        cost: 14,
        damage: 10,
        description: "Slices through enemies with a razor-sharp blade of air.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 10,
    },
    {
        name: "Tailwind",
        type: "WIND",
        cost: 10,
        damage: null,
        description: "Increases the speed of allies, allowing them to act quicker in battle.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100,
    },
    {
        name: "Whirlwind",
        type: "WIND",
        cost: 18,
        damage: 12,
        description: "Summons a whirlwind that disorients enemies, dealing damage and causing confusion.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: 12,
    },
];
export const waterAbilities = [
    {
        name: "Tidal Wave",
        type: "WATER",
        cost: 20,
        damage: 30,
        description: "Unleashes a massive wave that crashes down on enemies, dealing significant damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Aqua Shield",
        type: "WATER",
        cost: 15,
        damage: null,
        description: "Forms a shield of water around the user, reducing incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 25,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "HEALING Rain",
        type: "WATER",
        cost: 12,
        damage: null,
        description: "Calls down a soothing rain that heals the user and allies.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: 1,
        effectChance: 100,
        effectDamage: null,
        effectReduction: null,
        effectHeal: 20,
        effectIncrease: null
    },
    {
        name: "Water Jet",
        type: "WATER",
        cost: 8,
        damage: 15,
        description: "Fires a concentrated jet of water that deals moderate damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Freeze",
        type: "WATER",
        cost: 18,
        damage: 20,
        description: "Conjures a burst of freezing water to damage and potentially freeze enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 30,
        effectDamage: 15,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Misty Veil",
        type: "WATER",
        cost: 10,
        damage: null,
        description: "Creates a mist that obscures vision, making allies harder to hit.",
        category: "UTILITY",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 15,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Vortex",
        type: "WATER",
        cost: 22,
        damage: 25,
        description: "Summons a powerful vortex that pulls in enemies and deals damage over time.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 80,
        effectDamage: 10,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Geyser",
        type: "WATER",
        cost: 15,
        damage: 18,
        description: "Erupts a column of boiling water beneath the enemies, dealing significant damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Tsunami Surge",
        type: "WATER",
        cost: 30,
        damage: 40,
        description: "Calls forth a massive tsunami that devastates all enemies in its path.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Rain Dance",
        type: "WATER",
        cost: 12,
        damage: null,
        description: "Summons a gentle rain that boosts the power of all water-type abilities.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 20 // Increases power of water-type abilities by 20%
    }
];
export const earthAbilities = [
    {
        name: "Quake",
        type: "EARTH",
        cost: 20,
        damage: 40,
        description: "Causes a powerful earthquake that deals significant damage to all enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Rock Shield",
        type: "EARTH",
        cost: 15,
        damage: null,
        description: "Erects a shield of rock that absorbs incoming damage and protects the user.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,
        effectDamage: null,
        effectReduction: 30,  // Reduces incoming damage by 30%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Mud Slap",
        type: "EARTH",
        cost: 5,
        damage: 10,
        description: "Hurls a clump of mud at the enemy, dealing minor damage and reducing their accuracy.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 100,
        effectDamage: 10,
        effectReduction: 10,  // Reduces enemy accuracy by 10%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Sandstorm",
        type: "EARTH",
        cost: 18,
        damage: 15,
        description: "Creates a fierce sandstorm that deals damage and has a chance to lower enemy accuracy.",
        category: "ATTACK",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,
        effectDamage: 15,
        effectReduction: 10,  // Reduces enemy accuracy by 10%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Stone Edge",
        type: "EARTH",
        cost: 25,
        damage: 35,
        description: "Fires sharp stone shards at the enemy, with a chance to critically hit.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: 20,  // 20% chance for a critical hit
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Earthquake",
        type: "EARTH",
        cost: 22,
        damage: 30,
        description: "Unleashes a massive earthquake that affects all opponents and has a chance to lower their defense.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to lower enemy defense
        effectDamage: 30,
        effectReduction: 20,  // Reduces enemy defense by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Tremor",
        type: "EARTH",
        cost: 12,
        damage: 20,
        description: "Sends a series of small tremors that deal damage and have a chance to cause the enemy to flinch.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: null,
        effectChance: 30,  // 30% chance to cause flinch
        effectDamage: 20,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Gravel Trap",
        type: "EARTH",
        cost: 10,
        damage: null,
        description: "Creates a pit of gravel that slows down and damages enemies over time.",
        category: "UTILITY",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 80,  // 80% chance to deal damage over time
        effectDamage: 5,  // Deals 5 damage per turn
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Boulder Bash",
        type: "EARTH",
        cost: 15,
        damage: 25,
        description: "Smashes a boulder into the enemy, causing significant damage and a chance to stun.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 1,
        effectChance: 25,  // 25% chance to stun the enemy
        effectDamage: 25,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Earth Heal",
        type: "EARTH",
        cost: 20,
        damage: null,
        description: "Channels earth’s energy to heal the user or an ally.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,
        effectDamage: null,
        effectReduction: null,
        effectHeal: 30,  // Heals 30 HP
        effectIncrease: null
    },
    {
        name: "Rockfall",
        type: "EARTH",
        cost: 12,
        damage: 15,
        description: "Calls down a rain of rocks on enemies, dealing damage and causing a chance to confuse them.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 40,  // 40% chance to confuse enemies
        effectDamage: 15,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const electricAbilities = [
    {
        name: "Thunderbolt",
        type: "ELECTRIC",
        cost: 15,
        damage: 40,
        description: "A jolt of electricity that deals damage and has a chance to paralyze the enemy.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to paralyze
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Shock Wave",
        type: "ELECTRIC",
        cost: 10,
        damage: 25,
        description: "A wave of electricity that always hits the target and has a small chance to paralyze.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 1,
        effectChance: 10,  // 10% chance to paralyze
        effectDamage: 25,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Thunder",
        type: "ELECTRIC",
        cost: 30,
        damage: 60,
        description: "Calls down a powerful bolt of lightning that deals heavy damage and may cause paralysis.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 25,  // 25% chance to paralyze
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Electro Ball",
        type: "ELECTRIC",
        cost: 20,
        damage: 35,
        description: "Charges and throws a ball of electricity that deals more damage the faster the user is compared to the target.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Thunder Wave",
        type: "ELECTRIC",
        cost: 12,
        damage: null,
        description: "Sends out a wave of electric energy that paralyzes the target.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to paralyze
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Volt Switch",
        type: "ELECTRIC",
        cost: 18,
        damage: 30,
        description: "Deals damage and then allows the user to switch out with another Pokémon or ally.",
        category: "ATTACK",
        effectType: "UTILITY",
        effectTurns: null,
        effectChance: null,
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Electric Terrain",
        type: "ELECTRIC",
        cost: 25,
        damage: null,
        description: "Creates an electric field that boosts Electric-type moves and prevents sleep status.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,  // 100% chance to apply Electric Terrain
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Discharge",
        type: "ELECTRIC",
        cost: 22,
        damage: 30,
        description: "Releases a burst of electricity that deals damage and has a chance to paralyze all adjacent enemies.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to paralyze
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Charge Beam",
        type: "ELECTRIC",
        cost: 15,
        damage: 20,
        description: "Fires a beam of electric energy that may also increase the user's Special ATTACK.",
        category: "ATTACK",
        effectType: "BUFF",
        effectTurns: 1,
        effectChance: 50,  // 50% chance to increase Special ATTACK
        effectDamage: 20,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 10  // Increases Special ATTACK by 10%
    },
    {
        name: "Zap Cannon",
        type: "ELECTRIC",
        cost: 30,
        damage: 70,
        description: "Launches a powerful electric cannon that deals heavy damage and has a high chance to paralyze.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 50,  // 50% chance to paralyze
        effectDamage: 70,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const solarAbilities = [
    {
        name: "Solar Beam",
        type: "SOLAR",
        cost: 30,
        damage: 70,
        description: "A powerful beam of solar energy that deals heavy damage to the target.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 70,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Sunlight",
        type: "SOLAR",
        cost: 20,
        damage: null,
        description: "Harnesses the power of the sun to boost Solar-type abilities and weaken Water-type abilities.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,  // 100% chance to apply Sunlight
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Solar Shield",
        type: "SOLAR",
        cost: 15,
        damage: null,
        description: "Creates a protective barrier of solar energy that reduces incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to apply Solar Shield
        effectDamage: null,
        effectReduction: 20, // Reduces damage by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Radiant Pulse",
        type: "SOLAR",
        cost: 18,
        damage: 40,
        description: "Unleashes a pulse of radiant energy that deals damage and may cause blindness.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to blind the target
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Solar Flare",
        type: "SOLAR",
        cost: 25,
        damage: 55,
        description: "Emits a flare of intense solar energy, dealing heavy damage and having a chance to burn the target.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 25,  // 25% chance to burn the target
        effectDamage: 55,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "HEALING Light",
        type: "SOLAR",
        cost: 20,
        damage: null,
        description: "Channels the power of the sun to heal a portion of the user's or ally's health.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: null,
        effectReduction: null,
        effectHeal: 30,  // Heals 30 HP
        effectIncrease: null
    },
    {
        name: "Sun Burst",
        type: "SOLAR",
        cost: 28,
        damage: 65,
        description: "Releases a burst of concentrated solar energy, dealing massive damage to the enemy.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 65,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Solar Drain",
        type: "SOLAR",
        cost: 22,
        damage: 35,
        description: "Siphons energy from the sun to deal damage and restore some of the user's health.",
        category: "ATTACK",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: 35,
        effectReduction: null,
        effectHeal: 15,  // Heals 15 HP
        effectIncrease: null
    },
    {
        name: "Dawn's Radiance",
        type: "SOLAR",
        cost: 18,
        damage: null,
        description: "Restores a small amount of HP to all allies and increases their attack power slightly.",
        category: "SUPPORT",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to apply the effect
        effectDamage: null,
        effectReduction: null,
        effectHeal: 10,  // Heals 10 HP to all allies
        effectIncrease: 10  // Increases attack power by 10%
    },
    {
        name: "Solar Eruption",
        type: "SOLAR",
        cost: 30,
        damage: 75,
        description: "Unleashes a devastating eruption of solar energy, dealing high damage and possibly causing confusion.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 20,  // 20% chance to confuse the target
        effectDamage: 75,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const lunarAbilities = [
    {
        name: "Moonbeam",
        type: "LUNAR",
        cost: 25,
        damage: 50,
        description: "Calls down a concentrated beam of moonlight that deals significant damage to the target.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Lunar Veil",
        type: "LUNAR",
        cost: 20,
        damage: null,
        description: "Shrouds the user in a protective veil of lunar energy, reducing incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Lunar Veil
        effectDamage: null,
        effectReduction: 15, // Reduces damage by 15%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Eclipse Strike",
        type: "LUNAR",
        cost: 30,
        damage: 60,
        description: "Unleashes a powerful strike during an eclipse, dealing high damage and potentially causing fear.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 25,  // 25% chance to cause fear
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Lunar Heal",
        type: "LUNAR",
        cost: 15,
        damage: null,
        description: "Heals the target with the soothing light of the moon.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: null,
        effectReduction: null,
        effectHeal: 40,  // Heals 40 HP
        effectIncrease: null
    },
    {
        name: "Nightfall",
        type: "LUNAR",
        cost: 18,
        damage: 35,
        description: "Casts a shadowy mist over the battlefield, dealing damage and reducing the accuracy of enemies.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 40,  // 40% chance to reduce accuracy
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Celestial Blessing",
        type: "LUNAR",
        cost: 22,
        damage: null,
        description: "Blesses an ally with the power of the moon, increasing their defense and healing a small amount of HP.",
        category: "SUPPORT",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,  // 100% chance to apply Celestial Blessing
        effectDamage: null,
        effectReduction: null,
        effectHeal: 20,  // Heals 20 HP
        effectIncrease: 15  // Increases defense by 15%
    },
    {
        name: "Moonlit Dance",
        type: "LUNAR",
        cost: 30,
        damage: 45,
        description: "A graceful dance under the moonlight that deals damage and may confuse enemies.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to confuse enemies
        effectDamage: 45,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Starlight Shield",
        type: "LUNAR",
        cost: 20,
        damage: null,
        description: "Creates a shield of starlight that reduces incoming damage and has a chance to reflect a portion of the damage back to attackers.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to reflect damage
        effectDamage: null,
        effectReduction: 20, // Reduces damage by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Lunar Drain",
        type: "LUNAR",
        cost: 25,
        damage: 40,
        description: "Drains the lunar energy from the target, dealing damage and restoring health to the user.",
        category: "ATTACK",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: 40,
        effectReduction: null,
        effectHeal: 20,  // Heals 20 HP
        effectIncrease: null
    },
    {
        name: "Moonlit Mist",
        type: "LUNAR",
        cost: 18,
        damage: null,
        description: "Summons a mist of moonlight that lowers the attack power of all enemies on the field.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Moonlit Mist
        effectDamage: null,
        effectReduction: 10, // Reduces attack power by 10%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Lunar Eclipse",
        type: "LUNAR",
        cost: 35,
        damage: 75,
        description: "Channels the power of a lunar eclipse to deal massive damage and reduce the target's speed.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 40,  // 40% chance to reduce speed
        effectDamage: 75,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const shadowAbilities = [
    {
        name: "Shadow Claw",
        type: "SHADOW",
        cost: 20,
        damage: 45,
        description: "A quick strike with dark energy claws that may cause fear.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to cause fear
        effectDamage: 45,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Dark Veil",
        type: "SHADOW",
        cost: 25,
        damage: null,
        description: "Envelopes the user in darkness, reducing the accuracy of enemies.",
        category: "DEFENSE",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to reduce accuracy
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Shadow Ball",
        type: "SHADOW",
        cost: 30,
        damage: 60,
        description: "Hurls a ball of shadowy energy at the enemy, causing substantial damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Nightmare",
        type: "SHADOW",
        cost: 35,
        damage: null,
        description: "Inflicts a terrifying nightmare on the target, causing damage over time.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 70,  // 70% chance to cause damage over time
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Eclipse Shroud",
        type: "SHADOW",
        cost: 20,
        damage: null,
        description: "Creates a shroud of darkness that reduces incoming damage for a few turns.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Eclipse Shroud
        effectDamage: null,
        effectReduction: 20, // Reduces damage by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Shadowy Embrace",
        type: "SHADOW",
        cost: 25,
        damage: 40,
        description: "Wraps the target in shadows, dealing damage and lowering their defense.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 40,  // 40% chance to lower defense
        effectDamage: 40,
        effectReduction: 15, // Lowers defense by 15%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Gloomy Aura",
        type: "SHADOW",
        cost: 30,
        damage: null,
        description: "Generates an aura of gloom that weakens the attack power of enemies.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Gloomy Aura
        effectDamage: null,
        effectReduction: 10, // Reduces attack power by 10%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Shadow Pulse",
        type: "SHADOW",
        cost: 18,
        damage: 35,
        description: "Releases a pulse of shadow energy that deals damage and has a chance to paralyze the target.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 25,  // 25% chance to paralyze
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Darkness Within",
        type: "SHADOW",
        cost: 30,
        damage: null,
        description: "Channel the power of the shadows to heal the user while also causing damage to enemies.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: 50,
        effectReduction: null,
        effectHeal: 30,  // Heals 30 HP
        effectIncrease: null
    },
    {
        name: "Eternal Night",
        type: "SHADOW",
        cost: 40,
        damage: null,
        description: "Summons an area of darkness that persists and weakens enemies over time.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 5,
        effectChance: 100,  // 100% chance to apply Eternal Night
        effectDamage: null,
        effectReduction: 5, // Reduces stats by 5% each turn
        effectHeal: null,
        effectIncrease: null
    }
];
export const mysticAbilities = [
    {
        name: "Mystic Blast",
        type: "MYSTIC",
        cost: 20,
        damage: 50,
        description: "Unleashes a concentrated burst of mystical energy to deal damage to the enemy.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Arcane Shield",
        type: "MYSTIC",
        cost: 25,
        damage: null,
        description: "Creates a magical shield that reduces incoming damage for a few turns.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Arcane Shield
        effectDamage: null,
        effectReduction: 30, // Reduces damage by 30%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Enchanted Heal",
        type: "MYSTIC",
        cost: 15,
        damage: null,
        description: "Channels mystical energy to heal the target’s wounds.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: null,
        effectReduction: null,
        effectHeal: 40,  // Heals 40 HP
        effectIncrease: null
    },
    {
        name: "Mystic Fog",
        type: "MYSTIC",
        cost: 30,
        damage: null,
        description: "Envelops the battlefield in a mystical fog that lowers the accuracy of all enemies.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to apply Mystic Fog
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Celestial Radiance",
        type: "MYSTIC",
        cost: 35,
        damage: 60,
        description: "Calls down a beam of celestial light to deal damage and blind the enemy.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 40,  // 40% chance to blind the enemy
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Astral Bind",
        type: "MYSTIC",
        cost: 25,
        damage: null,
        description: "Restrains the target with astral chains, reducing their movement speed.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to reduce movement speed
        effectDamage: null,
        effectReduction: 20, // Reduces speed by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Mystic Surge",
        type: "MYSTIC",
        cost: 20,
        damage: null,
        description: "Unleashes a surge of mystical energy that boosts the user's spell power temporarily.",
        category: "SUPPORT",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to boost spell power
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 25, // Increases spell power by 25%
    },
    {
        name: "Ethereal Shroud",
        type: "MYSTIC",
        cost: 30,
        damage: null,
        description: "Casts a shroud of ethereal energy that makes the user harder to hit.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Ethereal Shroud
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 20, // Increases evasion by 20%
    },
    {
        name: "Temporal Twist",
        type: "MYSTIC",
        cost: 40,
        damage: null,
        description: "Manipulates time to briefly slow down the enemy, reducing their action speed.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 70,  // 70% chance to reduce action speed
        effectDamage: null,
        effectReduction: 15, // Reduces action speed by 15%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Luminous Burst",
        type: "MYSTIC",
        cost: 25,
        damage: 45,
        description: "Emits a burst of mystical light that damages the enemy and may temporarily dazzle them.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 30,  // 30% chance to dazzle
        effectDamage: 45,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const natureAbilities = [
    {
        name: "Vine Whip",
        type: "NATURE",
        cost: 15,
        damage: 30,
        description: "Uses vines to whip the enemy, dealing damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Regrowth",
        type: "NATURE",
        cost: 20,
        damage: null,
        description: "Heals the target's wounds with the power of nature.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: null,
        effectReduction: null,
        effectHeal: 50,  // Heals 50 HP
        effectIncrease: null
    },
    {
        name: "Entangle",
        type: "NATURE",
        cost: 25,
        damage: null,
        description: "Roots and vines entangle the enemy, reducing their speed.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 70,  // 70% chance to reduce speed
        effectDamage: null,
        effectReduction: 20, // Reduces speed by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Nature's Blessing",
        type: "NATURE",
        cost: 30,
        damage: null,
        description: "Bestows a blessing that increases the target’s defense.",
        category: "SUPPORT",
        effectType: "BUFF",
        effectTurns: 5,
        effectChance: 100,  // 100% chance to apply Nature's Blessing
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 25, // Increases defense by 25%
    },
    {
        name: "Poison Ivy",
        type: "NATURE",
        cost: 20,
        damage: 20,
        description: "Releases toxic spores that damage and poison the enemy over time.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 80,  // 80% chance to apply poison
        effectDamage: 20,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Earthquake",
        type: "NATURE",
        cost: 40,
        damage: 70,
        description: "Causes the ground to quake violently, dealing significant damage to all enemies.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 70,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Refreshing Rain",
        type: "NATURE",
        cost: 30,
        damage: null,
        description: "Summons a rain that heals the target over time.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to heal over time
        effectDamage: null,
        effectReduction: null,
        effectHeal: 15,  // Heals 15 HP per turn
        effectIncrease: null
    },
    {
        name: "Camouflage",
        type: "NATURE",
        cost: 15,
        damage: null,
        description: "Blends the user into the environment, increasing their evasion.",
        category: "DEFENSE",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to apply Camouflage
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 30, // Increases evasion by 30%
    },
    {
        name: "Wild Growth",
        type: "NATURE",
        cost: 35,
        damage: null,
        description: "Encourages rapid plant growth to block enemy movement and reduce their action speed.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 60,  // 60% chance to reduce action speed
        effectDamage: null,
        effectReduction: 25, // Reduces action speed by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Fungal Spore",
        type: "NATURE",
        cost: 20,
        damage: 25,
        description: "Releases spores that deal damage and may confuse the enemy.",
        category: "ATTACK",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 40,  // 40% chance to confuse the enemy
        effectDamage: 25,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Barkskin",
        type: "NATURE",
        cost: 20,
        damage: null,
        description: "Toughens the skin of the user, reducing incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Barkskin
        effectDamage: null,
        effectReduction: 25, // Reduces incoming damage by 25%
        effectHeal: null,
        effectIncrease: null
    }
];
export const astralAbilities = [
    {
        name: "Starfall",
        type: "ASTRAL",
        cost: 30,
        damage: 50,
        description: "Calls down a falling star to deal significant damage to the enemy.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Celestial Shield",
        type: "ASTRAL",
        cost: 25,
        damage: null,
        description: "Creates a protective barrier of stardust that reduces incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Celestial Shield
        effectDamage: null,
        effectReduction: 30, // Reduces incoming damage by 30%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Lunar Radiance",
        type: "ASTRAL",
        cost: 20,
        damage: null,
        description: "Heals allies with the soothing light of the moon.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal
        effectDamage: null,
        effectReduction: null,
        effectHeal: 40,  // Heals 40 HP
        effectIncrease: null
    },
    {
        name: "Astral Beam",
        type: "ASTRAL",
        cost: 35,
        damage: 60,
        description: "Fires a concentrated beam of astral energy at the enemy, causing high damage.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Nebula Fog",
        type: "ASTRAL",
        cost: 25,
        damage: null,
        description: "Summons a fog of nebula gas that confuses and lowers the accuracy of enemies.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 70,  // 70% chance to lower accuracy
        effectDamage: null,
        effectReduction: 20, // Reduces accuracy by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Astral Surge",
        type: "ASTRAL",
        cost: 40,
        damage: 70,
        description: "Unleashes a powerful surge of astral energy, dealing massive damage to all enemies.",
        category: "ATTACK",
        effectType: null,
        effectTurns: null,
        effectChance: null,
        effectDamage: 70,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Eclipse Veil",
        type: "ASTRAL",
        cost: 30,
        damage: null,
        description: "Casts a veil of eclipse that reduces the enemy's damage output.",
        category: "DEFENSE",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 80,  // 80% chance to reduce damage
        effectDamage: null,
        effectReduction: 25, // Reduces enemy's damage by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Starry Guidance",
        type: "ASTRAL",
        cost: 20,
        damage: null,
        description: "Guides allies with starlight, increasing their critical hit chance.",
        category: "SUPPORT",
        effectType: "BUFF",
        effectTurns: 4,
        effectChance: 100,  // 100% chance to apply Starry Guidance
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 15, // Increases critical hit chance by 15%
    },
    {
        name: "Meteor Strike",
        type: "ASTRAL",
        cost: 35,
        damage: 55,
        description: "Summons a meteor to strike the target, causing substantial damage and a chance to burn.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 50,  // 50% chance to burn
        effectDamage: 55,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Cosmic Restore",
        type: "ASTRAL",
        cost: 25,
        damage: null,
        description: "Restores HP to the user and cleanses any debuffs with cosmic energy.",
        category: "SUPPORT",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100,  // 100% chance to heal and cleanse
        effectDamage: null,
        effectReduction: null,
        effectHeal: 30,  // Heals 30 HP
        effectIncrease: null
    }
];
export const toxicAbilities = [
    {
        name: "Toxic Spit",
        type: "TOXIC",
        cost: 20,
        damage: 30,
        description: "Spits a toxic substance at the enemy, causing immediate damage and a chance to poison.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to poison
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Acid Rain",
        type: "TOXIC",
        cost: 25,
        damage: null,
        description: "Summons a rain of acidic droplets that lowers the target's defense.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 80,  // 80% chance to lower defense
        effectDamage: null,
        effectReduction: 25, // Reduces defense by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Poison Jab",
        type: "TOXIC",
        cost: 15,
        damage: 40,
        description: "Jabs the target with a poisoned needle, causing damage and a chance to poison.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 60,  // 60% chance to poison
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Venomous Shield",
        type: "TOXIC",
        cost: 30,
        damage: null,
        description: "Creates a shield of venomous energy that poisons any attacker.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to poison attackers
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Toxic Cloud",
        type: "TOXIC",
        cost: 25,
        damage: null,
        description: "Generates a toxic cloud that poisons all enemies in the area.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 4,
        effectChance: 70,  // 70% chance to poison
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Corrosive Gas",
        type: "TOXIC",
        cost: 20,
        damage: 35,
        description: "Releases a gas that corrodes the enemy, dealing damage and reducing their attack power.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 80,  // 80% chance to reduce attack
        effectDamage: 35,
        effectReduction: 20, // Reduces attack power by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Noxious Aura",
        type: "TOXIC",
        cost: 30,
        damage: null,
        description: "Surrounds the user with a noxious aura that poisons any enemies who come close.",
        category: "DEFENSE",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 100,  // 100% chance to poison close enemies
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Gloomy Mist",
        type: "TOXIC",
        cost: 25,
        damage: null,
        description: "Envelopes the battlefield in a gloomy mist that lowers the accuracy of all opponents.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 75,  // 75% chance to lower accuracy
        effectDamage: null,
        effectReduction: 20, // Reduces accuracy by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Poisonous Fang",
        type: "TOXIC",
        cost: 20,
        damage: 45,
        description: "Bites the enemy with venomous fangs, causing damage and a high chance to poison.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 70,  // 70% chance to poison
        effectDamage: 45,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Toxic Burst",
        type: "TOXIC",
        cost: 40,
        damage: 60,
        description: "Unleashes a powerful burst of toxic energy, dealing damage to all enemies and poisoning them.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 50,  // 50% chance to poison
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const metallicAbilities = [
    {
        name: "Iron Fist",
        type: "METALLIC",
        cost: 25,
        damage: 50,
        description: "Delivers a powerful punch enhanced with metallic energy, dealing heavy damage.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Steel Wall",
        type: "METALLIC",
        cost: 30,
        damage: null,
        description: "Creates a defensive barrier of steel, reducing incoming damage for several turns.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: null,
        effectDamage: null,
        effectReduction: 40, // Reduces incoming damage by 40%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Magnetic Pull",
        type: "METALLIC",
        cost: 20,
        damage: null,
        description: "Uses magnetic forces to pull enemies towards the user, reducing their attack power.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 80, // 80% chance to reduce attack
        effectDamage: null,
        effectReduction: 20, // Reduces attack power by 20%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Metallic Overdrive",
        type: "METALLIC",
        cost: 40,
        damage: 60,
        description: "Charges the user with metallic energy, dealing damage and increasing their own attack power.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 100, // 100% chance to increase attack power
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 20 // Increases attack power by 20%
    },
    {
        name: "Rusting Aura",
        type: "METALLIC",
        cost: 25,
        damage: null,
        description: "Generates an aura that causes metallic enemies to rust, reducing their defense.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 70, // 70% chance to reduce defense
        effectDamage: null,
        effectReduction: 25, // Reduces defense by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Iron Skin",
        type: "METALLIC",
        cost: 30,
        damage: null,
        description: "Temporarily hardens the user’s skin to resist damage more effectively.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 5,
        effectChance: null,
        effectDamage: null,
        effectReduction: 30, // Reduces incoming damage by 30%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Magnetic Shield",
        type: "METALLIC",
        cost: 20,
        damage: null,
        description: "Forms a magnetic shield that deflects projectiles, reducing damage from ranged attacks.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: null,
        effectDamage: null,
        effectReduction: 50, // Reduces damage from ranged attacks by 50%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Iron Cleave",
        type: "METALLIC",
        cost: 35,
        damage: 45,
        description: "Cleanses the enemy with a sharp metallic cleave, dealing damage and potentially causing bleeding.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 40, // 40% chance to cause bleeding
        effectDamage: 45,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Metallic Surge",
        type: "METALLIC",
        cost: 40,
        damage: null,
        description: "Unleashes a surge of metallic energy, increasing the user's speed and critical hit chance.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 15 // Increases speed and critical hit chance by 15%
    },
    {
        name: "Steel Rain",
        type: "METALLIC",
        cost: 30,
        damage: 55,
        description: "Calls down a barrage of steel projectiles, dealing area damage and causing bleeding.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 50, // 50% chance to cause bleeding
        effectDamage: 55,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Metallic Resilience",
        type: "METALLIC",
        cost: 25,
        damage: null,
        description: "Enhances the user's resilience, reducing damage taken and increasing resistance to status effects.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 5,
        effectChance: null,
        effectDamage: null,
        effectReduction: 25, // Reduces incoming damage by 25%
        effectHeal: null,
        effectIncrease: null
    }
];
export const spectralAbilities = [
    {
        name: "Phantom Strike",
        type: "SPECTRAL",
        cost: 20,
        damage: 40,
        description: "A quick strike that bypasses physical defenses and deals damage directly to the enemy's essence.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Ethereal Shield",
        type: "SPECTRAL",
        cost: 30,
        damage: null,
        description: "Forms a protective shield of spectral energy, reducing incoming damage from physical attacks.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: null,
        effectDamage: null,
        effectReduction: 35, // Reduces incoming damage by 35%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Spectral Lure",
        type: "SPECTRAL",
        cost: 25,
        damage: null,
        description: "Attracts enemies with a spectral illusion, reducing their accuracy and evasion.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 75, // 75% chance to reduce accuracy
        effectDamage: null,
        effectReduction: 25, // Reduces accuracy by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Wraith Form",
        type: "SPECTRAL",
        cost: 35,
        damage: null,
        description: "Transforms the user into a wraith, becoming intangible and evading all attacks for a brief period.",
        category: "UTILITY",
        effectType: "Evasion",
        effectTurns: 2,
        effectChance: 100, // 100% chance to evade attacks
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Haunting Wail",
        type: "SPECTRAL",
        cost: 40,
        damage: 50,
        description: "Unleashes a chilling wail that causes spectral damage and has a chance to frighten enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 60, // 60% chance to frighten enemies
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Spectral Rebirth",
        type: "SPECTRAL",
        cost: 50,
        damage: null,
        description: "Revives a fallen ally with a fraction of their health, channeling spectral energy to restore them.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: 30, // Revives ally with 30% health
        effectIncrease: null
    },
    {
        name: "Ghostly Step",
        type: "SPECTRAL",
        cost: 20,
        damage: null,
        description: "Allows the user to phase through obstacles and enemies, repositioning quickly on the battlefield.",
        category: "UTILITY",
        effectType: "Movement",
        effectTurns: null,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Soul Drain",
        type: "SPECTRAL",
        cost: 30,
        damage: 45,
        description: "Drains the life force from an enemy, dealing damage and restoring a portion of health to the user.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 45,
        effectReduction: null,
        effectHeal: 20, // Restores 20% of the damage dealt as health
        effectIncrease: null
    },
    {
        name: "Phantom Veil",
        type: "SPECTRAL",
        cost: 25,
        damage: null,
        description: "Casts a veil of spectral mist over the user, obscuring their presence and reducing the likelihood of being targeted.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: 70, // 70% chance to reduce targeting
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Ethereal Surge",
        type: "SPECTRAL",
        cost: 40,
        damage: null,
        description: "Channels a surge of ethereal energy that boosts the user’s speed and critical hit chance for a short duration.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 15 // Increases speed and critical hit chance by 15%
    }
];
export const chaosAbilities = [
    {
        name: "Chaotic Blast",
        type: "CHAOS",
        cost: 25,
        damage: 50,
        description: "Unleashes a chaotic energy blast that deals high damage and has a chance to inflict random negative effects.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: 50, // 50% chance to inflict random effects
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Anarchy Shield",
        type: "CHAOS",
        cost: 30,
        damage: null,
        description: "Creates a shield of chaotic energy that reflects a portion of incoming damage back to attackers.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: 25, // Reflects 25% of incoming damage
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Entropy Wave",
        type: "CHAOS",
        cost: 35,
        damage: 40,
        description: "Casts a wave of entropy that deals damage and has a chance to disrupt enemy actions.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 60, // 60% chance to disrupt enemy actions (stun, silence, etc.)
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Random Rift",
        type: "CHAOS",
        cost: 40,
        damage: null,
        description: "Opens a rift in space that randomly teleports the user or enemy to a different location on the battlefield.",
        category: "UTILITY",
        effectType: "Movement",
        effectTurns: null,
        effectChance: 70, // 70% chance to teleport
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Pandemonium",
        type: "CHAOS",
        cost: 50,
        damage: 60,
        description: "Causes chaos to erupt on the battlefield, dealing significant damage to all enemies and causing confusion.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 50, // 50% chance to confuse enemies
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Confusion Aura",
        type: "CHAOS",
        cost: 30,
        damage: null,
        description: "Generates an aura of confusion around the user, causing nearby enemies to attack randomly.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 60, // 60% chance to cause random attacks
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Chaos Resurgence",
        type: "CHAOS",
        cost: 45,
        damage: null,
        description: "Revives the user with a burst of chaotic energy, restoring a portion of health and increasing damage output for a short duration.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: 3,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: 40, // Restores 40% health
        effectIncrease: 20 // Increases damage output by 20%
    },
    {
        name: "Chaotic Infusion",
        type: "CHAOS",
        cost: 25,
        damage: null,
        description: "Infuses the user’s attacks with chaotic energy, causing them to deal random extra damage or effects.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 15 // Adds 15% chance to deal random extra damage or effects
    },
    {
        name: "Disorderly Surge",
        type: "CHAOS",
        cost: 30,
        damage: 35,
        description: "Releases a surge of chaotic energy that deals damage and has a chance to cause status effects such as burn or freeze.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 40, // 40% chance to cause a status effect
        effectDamage: 35,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Instability Zone",
        type: "CHAOS",
        cost: 35,
        damage: null,
        description: "Creates a zone of instability on the battlefield, causing all actions taken within it to have a chance of failure.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 4,
        effectChance: 50, // 50% chance of action failure
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const crispiesAbilities = [
    {
        name: "Toasty Burst",
        type: "CRISPIES",
        cost: 20,
        damage: 30,
        description: "Unleashes a burst of crispy energy, dealing damage and causing a brief burn effect.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 2,
        effectChance: 70, // 70% chance to inflict burn
        effectDamage: 30,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Crunch Shield",
        type: "CRISPIES",
        cost: 25,
        damage: null,
        description: "Forms a shield of crispy energy that absorbs a portion of incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: 20, // Absorbs 20% of incoming damage
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Crumb Trail",
        type: "CRISPIES",
        cost: 15,
        damage: null,
        description: "Leaves a trail of crispy crumbs that slows down enemies who walk over them.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 60, // 60% chance to slow enemies
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Golden Glaze",
        type: "CRISPIES",
        cost: 30,
        damage: null,
        description: "Covers the user in a golden glaze, increasing their resistance to damage.",
        category: "DEFENSE",
        effectType: "BUFF",
        effectTurns: 4,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: 25, // Reduces incoming damage by 25%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Crispy Blast",
        type: "CRISPIES",
        cost: 35,
        damage: 40,
        description: "Delivers a powerful crispy explosion that damages all nearby enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 40,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Mighty Munch",
        type: "CRISPIES",
        cost: 20,
        damage: null,
        description: "Munches on crispy treats to heal a small amount of health and restore energy.",
        category: "UTILITY",
        effectType: "HEALING",
        effectTurns: null,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: 25, // Heals 25% of health
        effectIncrease: 10 // Restores 10 energy points
    },
    {
        name: "Snap Crackle Pop",
        type: "CRISPIES",
        cost: 40,
        damage: 50,
        description: "Creates a cacophony of crispy sounds that deals damage and may stun enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 50, // 50% chance to stun
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Crispy Dance",
        type: "CRISPIES",
        cost: 25,
        damage: null,
        description: "Performs a lively dance that increases the user's speed and agility for a short period.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 3,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 20 // Increases speed and agility by 20%
    },
    {
        name: "Flaky Evasion",
        type: "CRISPIES",
        cost: 30,
        damage: null,
        description: "The user becomes extra flaky, making it harder for enemies to land a hit.",
        category: "DEFENSE",
        effectType: "Evasion",
        effectTurns: 2,
        effectChance: 70, // 70% chance to evade attacks
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Sugar Rush",
        type: "CRISPIES",
        cost: 15,
        damage: null,
        description: "Grants a burst of energy to the user, temporarily increasing their attack power.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 2,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 15 // Increases attack power by 15%
    },
    {
        name: "Crispy Confusion",
        type: "CRISPIES",
        cost: 35,
        damage: null,
        description: "Creates a field of confusing crispy energy that makes it difficult for enemies to act effectively.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 50, // 50% chance to cause confusion
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    }
];
export const voidAbilities = [
    {
        name: "Shadow Grasp",
        type: "VOID",
        cost: 25,
        damage: 40,
        description: "Summons tendrils of darkness to grasp and damage enemies, dealing damage over time.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 3,
        effectChance: 70, // 70% chance to deal damage over time
        effectDamage: 15,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Veil of Darkness",
        type: "VOID",
        cost: 30,
        damage: null,
        description: "Creates a shroud of darkness that conceals the user, reducing incoming damage.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 4,
        effectChance: null,
        effectDamage: null,
        effectReduction: 30, // Reduces incoming damage by 30%
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Void Step",
        type: "VOID",
        cost: 20,
        damage: null,
        description: "Allows the user to briefly step into the void, evading attacks.",
        category: "UTILITY",
        effectType: "Evasion",
        effectTurns: 2,
        effectChance: 80, // 80% chance to evade attacks
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Abyssal Scream",
        type: "VOID",
        cost: 35,
        damage: 50,
        description: "Unleashes a horrifying scream from the abyss that damages and terrifies enemies.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: 1,
        effectChance: 60, // 60% chance to terrify
        effectDamage: 50,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Eclipse Shield",
        type: "VOID",
        cost: 40,
        damage: null,
        description: "Forms a barrier of void energy that absorbs damage and reflects a portion back.",
        category: "DEFENSE",
        effectType: "PROTECTION",
        effectTurns: 3,
        effectChance: null,
        effectDamage: null,
        effectReduction: 25, // Absorbs 25% of incoming damage
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Dark Surge",
        type: "VOID",
        cost: 30,
        damage: 60,
        description: "Harnesses dark energy to unleash a powerful wave that damages all enemies in a radius.",
        category: "ATTACK",
        effectType: "DAMAGE",
        effectTurns: null,
        effectChance: null,
        effectDamage: 60,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Chilling Presence",
        type: "VOID",
        cost: 15,
        damage: null,
        description: "Radiates an aura of void energy that chills enemies, reducing their speed.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 70, // 70% chance to reduce speed
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Mind Fog",
        type: "VOID",
        cost: 25,
        damage: null,
        description: "Creates a cloud of confusion that disrupts enemy actions and reduces their accuracy.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 2,
        effectChance: 60, // 60% chance to cause confusion
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: null
    },
    {
        name: "Void Pulse",
        type: "VOID",
        cost: 20,
        damage: null,
        description: "Sends out a pulse of void energy that temporarily weakens enemy defenses.",
        category: "UTILITY",
        effectType: "DEBUFF",
        effectTurns: 3,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: -20 // Reduces enemy defenses by 20%
    },
    {
        name: "Eternal Darkness",
        type: "VOID",
        cost: 50,
        damage: null,
        description: "Envelops the battlefield in darkness, preventing enemies from seeing and increasing the chance of critical hits against them.",
        category: "UTILITY",
        effectType: "BUFF",
        effectTurns: 4,
        effectChance: 100, // Always successful
        effectDamage: null,
        effectReduction: null,
        effectHeal: null,
        effectIncrease: 25 // Increases critical hit chance by 25%
    }
];
