export const pyroAbilities = [
    {
        id: "1",
        name: "Meteor Smash",
        type: "PYRO",
        cost: 20,
        damage: 40,
        description: "Pull a meteor from the heavens to deal great fire damage!",
        category: "ATTACK",
        effects: [
            {id: "e1", name: "burning", type: "DAMAGE", turns: 3, chance: 20, damage: 5}
        ]
    },
    {
        id: "2",
        name: "Wall of Flame",
        type: "PYRO",
        cost: 0,
        damage: null,  // No direct damage
        description: "Erects a wall of flames to protect against attacks.",
        category: "DEFENSE",
        effects: [
            {id: "e2", name: "protection", type: "PROTECTION", turns: 2, chance: 100, reduction: 50}
        ]
    },
    {
        id: "3",
        name: "Flame Bolt",
        type: "PYRO",
        cost: 2,
        damage: 10,
        description: "A quick bolt of fire that deals minor damage.",
        category: "ATTACK",
        effects: []
    }
]

export const cryoAbilities = [
    {
        name: "Glacial Sunder",
        type: "Cryo",
        cost: 15,
        damage: 25,
        effects: [
            {name: "frozen", turns: 1, chance: 50}
        ],
        desc: "Send out a blast of cold dealing moderate damage with a chance of freezing the opponent!"
    },
]