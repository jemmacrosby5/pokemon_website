import { TestCardData } from "../testDataInterface";

export async function fetchCardData(): Promise<TestCardData | undefined> {
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


// export async function fetchCardImage(){}