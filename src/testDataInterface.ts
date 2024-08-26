// Define the interface for the ability object
export interface Ability {
    name: string;
    text: string;
    type: string;
}

// Define the interface for the attack object
export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

// Define the interface for the weakness object
export interface Weakness {
    type: string;
    value: string;
}

// Define the interface for the images in the set
export interface SetImages {
    symbol: string;
    logo: string;
}

// Define the interface for the legalities of the set
export interface SetLegalities {
    unlimited: string;
}

// Define the interface for the set object
export interface Set {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: SetLegalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: SetImages;
}

// Define the interface for the TCGPlayer prices
export interface TcgPlayerPrices {
    holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number | null;
    };
    reverseHolofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number | null;
    };
}

// Define the interface for the TCGPlayer data
export interface TcgPlayer {
    url: string;
    updatedAt: string;
    prices: TcgPlayerPrices;
}

// Define the interface for the CardMarket prices
export interface CardMarketPrices {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
}

// Define the interface for the CardMarket data
export interface CardMarket {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
}

// Define the interface for the main data object
export interface TestCardData {
    data: {
        id: string;
        name: string;
        supertype: string;
        subtypes: string[];
        hp: string;
        types: string[];
        evolvesFrom: string;
        rules: string[];
        abilities: Ability[];
        attacks: Attack[];
        weaknesses: Weakness[];
        set: Set;
        number: string;
        artist: string;
        rarity: string;
        nationalPokedexNumbers: number[];
        legalities: SetLegalities;
        images: {
            small: string;
            large: string;
        };
        tcgplayer: TcgPlayer;
        cardmarket: CardMarket;
    };
}
