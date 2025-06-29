export const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomWeightedOption = (options: any) => {
    const totalWeight = options.reduce((sum: number, option:any) => sum + option.weight, 0);
    let random = Math.random() * totalWeight;
    for (const option of options) {
        if (random < option.weight) {
            return option;
        }
        random -= option.weight;
    }
    
    return options[options.length - 1]; // Fallback
};