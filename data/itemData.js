export const potionsData = [
    {
        name: "Minor Health Potion",
        type: "Healing",
        effects: [
            { attribute: "health", value: 40 }
        ],
        buyPrice: 200,
        sellPrice: 80
    },
    {
        name: "Major Health Potion",
        type: "Healing",
        effects: [
            { attribute: "health", value: 100 }
        ],
        buyPrice: 550,
        sellPrice: 240
    },
    {
        name: "Potion of Luck",
        type: "Buff",
        effects: [
            { attribute: "luck", value: 5 }
        ],
        buyPrice: 2000,
        sellPrice: 600
    },
    {
        name: "Attack Potion",
        type: "Buff",
        effects: [
            { attribute: "attack", value: 10 }
        ],
        buyPrice: 1600,
        sellPrice: 350
    },
    {
        name: "Defense Potion",
        type: "Buff",
        effects: [
            { attribute: "defense", value: 10 }
        ],
        buyPrice: 1600,
        sellPrice: 350
    },
    {
        name: "Elixir of Strength",
        type: "Buff",
        effects: [
            { attribute: "attack", value: 15 },
            { attribute: "defense", value: 15 }
        ],
        buyPrice: 3000,
        sellPrice: 1200
    }
];