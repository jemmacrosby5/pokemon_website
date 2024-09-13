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
  number: string;
  rarity: string;
  nationalPokedexNumbers: number;
  small_image: string;
  large_image: string;
  set_id: string;
  row_number: number;
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
