export interface CardData {
    id: string;
    name: string;
    hp: string;
    evolvesFrom: string | null;
    evolvesTo: string | null;
    supertype: string;
    subtype: string;
    primaryType: string;
    secondaryType: string | null;
    number: number;
    rarity: string;
    nationalPokedexNumbers: number;
    small_image: string;
    large_image: string;
  }