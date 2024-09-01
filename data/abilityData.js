export const fireAbilities = [
    {
        name: "Meteor Smash",
        type: "FIRE",
        cost: 20,
        damage: 40,
        description: "Pull a meteor from the heavens to deal great fire damage!",
        category: "ATTACK",
        effects: [
            { id: "e1", name: "burning", type: "DAMAGE", turns: 3, chance: 20, damage: 5 }
        ]
    },
    {
        name: "Wall of Flame",
        type: "FIRE",
        cost: 0,
        damage: null,
        description: "Erects a wall of flames to protect against attacks.",
        category: "DEFENSE",
        effects: [
            { id: "e2", name: "protection", type: "PROTECTION", turns: 2, chance: 100, reduction: 50 }
        ]
    },
    {
        name: "Flame Bolt",
        type: "FIRE",
        cost: 2,
        damage: 10,
        description: "A quick bolt of fire that deals minor damage.",
        category: "ATTACK",
        effects: []
    },
    {
        name: "Blazing Aura",
        type: "FIRE",
        cost: 10,
        damage: null,
        description: "Surrounds the user with a fiery aura that damages attackers.",
        category: "UTILITY",
        effects: [
            { id: "e3", name: "burning", type: "DAMAGE", turns: 4, chance: 30, damage: 3 }
        ]
    },
    {
        name: "Inferno Surge",
        type: "FIRE",
        cost: 15,
        damage: 25,
        description: "Unleashes a surge of fire that targets multiple enemies.",
        category: "ATTACK",
        effects: [
            { id: "e4", name: "burning", type: "DAMAGE", turns: 2, chance: 25, damage: 4 }
        ]
    },
    {
        name: "Heat Wave",
        type: "FIRE",
        cost: 12,
        damage: 15,
        description: "Generates an intense wave of heat that reduces enemy defenses.",
        category: "ATTACK",
        effects: [
            { id: "e5", name: "weaken", type: "DEBUFF", turns: 2, chance: 100, reduction: 20 }
        ]
    },
    {
        name: "Firestorm",
        type: "FIRE",
        cost: 25,
        damage: 35,
        description: "Calls down a storm of fire that engulfs the battlefield.",
        category: "ATTACK",
        effects: [
            { id: "e6", name: "burning", type: "DAMAGE", turns: 4, chance: 15, damage: 7 }
        ]
    },
    {
        name: "Scorching Breath",
        type: "FIRE",
        cost: 8,
        damage: 12,
        description: "Breathes a cone of searing heat at the enemy.",
        category: "ATTACK",
        effects: [
            { id: "e7", name: "burning", type: "DAMAGE", turns: 1, chance: 50, damage: 3 }
        ]
    },
    {
        name: "Cauterize",
        type: "FIRE",
        cost: 5,
        damage: null,
        description: "Heals minor wounds by cauterizing them with fire.",
        category: "UTILITY",
        effects: [
            { id: "e8", name: "heal", type: "HEALING", turns: 1, chance: 100, heal: 10 }
        ]
    },
    {
        name: "Flare Up",
        type: "FIRE",
        cost: 3,
        damage: 5,
        description: "A sudden burst of flame that startles and damages the enemy.",
        category: "ATTACK",
        effects: []
    }
];

export const iceAbilities = [
    {
        name: "Frostbite",
        type: "ICE",
        cost: 15,
        damage: 20,
        description: "Bites into the enemy with extreme cold, reducing their speed.",
        category: "ATTACK",
        effects: [
            { id: "ie1", name: "slow", type: "DEBUFF", turns: 3, chance: 30, reduction: 20 }
        ]
    },
    {
        name: "Glacial Barrier",
        type: "ICE",
        cost: 10,
        damage: null,
        description: "Creates a barrier of ice that absorbs damage and protects the user.",
        category: "DEFENSE",
        effects: [
            { id: "ie2", name: "protection", type: "PROTECTION", turns: 2, chance: 100, reduction: 50 }
        ]
    },
    {
        name: "Ice Shard",
        type: "ICE",
        cost: 5,
        damage: 10,
        description: "Launches a sharp shard of ice at the enemy.",
        category: "ATTACK",
        effects: []
    },
    {
        name: "Blizzard",
        type: "ICE",
        cost: 25,
        damage: 30,
        description: "Summons a fierce blizzard to attack all enemies, with a chance to freeze them.",
        category: "ATTACK",
        effects: [
            { id: "ie3", name: "freeze", type: "DEBUFF", turns: 1, chance: 20, effect: "stun" }
        ]
    },
    {
        name: "Frozen Armor",
        type: "ICE",
        cost: 12,
        damage: null,
        description: "Encases the user in a layer of ice, reducing damage taken.",
        category: "DEFENSE",
        effects: [
            { id: "ie4", name: "protection", type: "PROTECTION", turns: 3, chance: 100, reduction: 30 }
        ]
    },
    {
        name: "Hailstorm",
        type: "ICE",
        cost: 18,
        damage: 25,
        description: "Rains down hailstones on the enemy, with a chance to lower their accuracy.",
        category: "ATTACK",
        effects: [
            { id: "ie5", name: "blur", type: "DEBUFF", turns: 2, chance: 25, reduction: 15 }
        ]
    },
    {
        name: "Icicle Spear",
        type: "ICE",
        cost: 8,
        damage: 12,
        description: "Throws a spear-like icicle that pierces the enemy.",
        category: "ATTACK",
        effects: []
    },
    {
        name: "Snow Cloak",
        type: "ICE",
        cost: 5,
        damage: null,
        description: "Cloaks the user in a veil of snow, making them harder to hit.",
        category: "UTILITY",
        effects: [
            { id: "ie6", name: "evasion", type: "BUFF", turns: 2, chance: 100, increase: 20 }
        ]
    },
    {
        name: "Chilling Wind",
        type: "ICE",
        cost: 7,
        damage: 8,
        description: "Blows a chilling wind at the enemy, lowering their attack power.",
        category: "ATTACK",
        effects: [
            { id: "ie7", name: "weaken", type: "DEBUFF", turns: 2, chance: 100, reduction: 10 }
        ]
    },
    {
        name: "Deep Freeze",
        type: "ICE",
        cost: 20,
        damage: 15,
        description: "Attempts to freeze the enemy solid, preventing them from acting.",
        category: "ATTACK",
        effects: [
            { id: "ie8", name: "freeze", type: "DEBUFF", turns: 2, chance: 40, effect: "stun" }
        ]
    }
];