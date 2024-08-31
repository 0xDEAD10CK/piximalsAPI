export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomWeightedOption = (options) => {
    const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
    let random = Math.random() * totalWeight;
    console.log("Total Weight:", totalWeight, "Random:", random)
    for (const option of options) {
        if (random < option.weight) {
            return option;
        }
        random -= option.weight;
    }
    
    return options[options.length - 1]; // Fallback
};