import { TestCardData } from "./testDataInterface";
import { CardData } from "./cardInterfaces";

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
      throw new Error('Failed to fetch card data.'); // Re-throw or handle the error appropriately
    }
  }
  


// export async function fetchCardImage(){}