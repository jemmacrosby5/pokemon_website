import { CardData, TotalValue, Set, SetPriceData, SimpleCardData, GraphData } from "./interfaces";

export async function fetchCardData(id: string): Promise<CardData> {
    try {
      const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getCard/${id}`);
      
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data = await res.json();
      const cardData: CardData = data[0]
      return cardData;
    } catch (error) {
      console.error('Error fetching card data:', error);
      throw new Error('Failed to fetch card data.');
    }
  }

  export async function fetchMostExpensiveCards(): Promise<CardData[]> {
    try {
      const res = await fetch('https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getMostExpensive');
      
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data: CardData[] = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching card data:', error);
      throw new Error('Failed to fetch card data.');
    }
  }
  


  export async function fetchTotalValue(): Promise<TotalValue> {
    try {
      const res = await fetch('https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getCollectionValue');
  
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const data: TotalValue[] = await res.json();
  
      if (data.length > 0) {
        return data[0]; 
      } else {
        throw new Error('No card value data available.');
      }
    } catch (error) {
      console.error('Error fetching total value:', error);
      throw new Error('Failed to fetch card data.');
    }
  }

  export async function fetchAllSets(): Promise<Set[]> {
    try {
      const res = await fetch('https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getSets');
  
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data: Set[] = await res.json(); 
  
      if (data.length > 0) {
        return data;
      } else {
        throw new Error('No set data available.');
      }
    } catch (error) {
      console.error('Error fetching sets:', error);
      throw new Error('Failed to fetch set data.');
    }
  }

  export async function fetchSetPriceData(id: string): Promise<SetPriceData> {
    try {
      const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getSetPriceData/${id}`);
  
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data: SetPriceData = await res.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching sets:', error);
      throw new Error('Failed to fetch set data.');
    }
  }

// export async function fetchCardDailyPrice(): Promise<SetPriceData> {
//   try {
//     const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getSetPriceData/${id}`);

//     if (!res.ok) {
//       throw new Error(`Response status: ${res.status}`);
//     }

//     const data: SetPriceData = await res.json(); 
//     return data;
//   } catch (error) {
//     console.error('Error fetching sets:', error);
//     throw new Error('Failed to fetch set data.');
//   }
// }

export async function fetchCardAvgPrices(id: string): Promise<SetPriceData> {
  try {
    const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getCardAvgPrices/${id}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: SetPriceData = await res.json(); 
    return data;
  } catch (error) {
    console.error('Failed to fetch card avg prices:', error);
    throw new Error('Failed to fetch card avg prices.');
  }
}

export async function fetchSetMetadata(id: string): Promise<Set> {
  try {
    const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getSetData/${id}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: Set[] = await res.json(); 
    return data[0];
  } catch (error) {
    console.error('Error fetching sets:', error);
    throw new Error('Failed to fetch set meta data.');
  }
}

export async function fetchSetCards(id: string): Promise<SimpleCardData[]> {
  try {
    const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getSetCards/${id}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: SimpleCardData[] = await res.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching sets:', error);
    throw new Error('Failed to fetch set cards.');
  }
}

export async function fetchAllCards(from: number, to: number): Promise<SimpleCardData[]> {
  try {
    const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getAllCards/${from}_${to}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: SimpleCardData[] = await res.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw new Error('Failed to fetch all cards.');
  }
}

export async function fetchHomePageGraph(): Promise<GraphData> {
  try {
    const res = await fetch('https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getGraphData');

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: GraphData = await res.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching graph data:', error);
    throw new Error('Failed to fetch graph data.');
  }
}

export async function fetchCardGraph(id: string): Promise<GraphData> {
  try {
    const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getCardDailyPrices/${id}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data: GraphData = await res.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching graph data:', error);
    throw new Error('Failed to fetch graph data.');
  }
}
  
  
  