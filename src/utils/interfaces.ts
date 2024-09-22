export interface CardData {
  card_id: string;
  name: string;
  hp: string;
  evolvesFrom: string | null;
  evolvesTo: string | null;
  supertype: string;
  subtype: string;
  primaryType: string;
  secondaryType: string | null;
  number: string;
  rarity: string;
  nationalPokedexNumbers: number;
  small_image: string;
  large_image: string;
  set_id: string;
  row_number: number;
}

export interface SimpleCardData {
  id: string;
  large_image: string;
}

export interface TotalValue {
  total_cardmarket: number;
  total_tcgplayer: number;
}

export interface Set {
  id: string;
  name: string;
  printed_total: number;
  total: number;
  symbol: string;
  logo: string;
}

export interface SetPriceData {
  cardmarket: {
    cardmarket_avg_last_30d: number;
    cardmarket_avg_last_7d: number;
    cardmarket_avg_last_1d: number;
  }[];
  tcgplayer: {
    tcgplayer_avg_last_30d: number;
    tcgplayer_avg_last_7d: number;
    tcgplayer_avg_last_1d: number;
  }[];
}

