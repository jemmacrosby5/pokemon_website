import { TestCardData } from "./testDataInterface";
import { CardData, TotalValue } from "./interfaces";


export async function fetchTestCardData(): Promise<TestCardData | undefined> {
    try {
        const res = await fetch("https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getTestData");
        
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        const data: TestCardData = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchCardData(id: string): Promise<CardData> {
    try {
      const res = await fetch(`https://rcrp5d3em6.execute-api.eu-west-2.amazonaws.com/dev/getCard/${id}`);
      
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data: CardData = await res.json();
      return data;
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
  
  