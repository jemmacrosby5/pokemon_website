import { useEffect, useState } from "react";
import {fetchCardData} from '../utils/APICaller.ts';
import { CardData } from "../utils/cardInterfaces.ts";
import CardImage from "./CardImage.tsx";

function CardArray(){

    const [cardArray, setCardArray] = useState<CardData[]>([]);
    const [error, setError] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const exampleCards: Array<string> = ['ex11-1', 'ex3-100', 'ex6-15', 'ex2-20', 'ex3-8'];
            
            const cardDataArray = await Promise.all(
              exampleCards.map(async (cardId) => {
                const cardData = await fetchCardData(cardId);
                console.log(cardData)
                return cardData;
              })
            );
            
            const validCardDataArray = cardDataArray.filter((data): data is CardData => data !== undefined);
            setCardArray(validCardDataArray);
          } catch (err) {
            setError(true);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); 

    return(
        <>
        {loading && (
            <p>I'm just loading, one sec...</p>
        )}
        {!error && !loading && cardArray &&(
            <>
            <p className="ml-12 font-bold">Here's some cards:</p>
            <div className="flex flex-col m-4 md:flex-row justify-center gap-4">
            {cardArray.map(function (card, index) {
              return (
                <div key={index}>
                  <CardImage URL={card.small_image} clickable={true} cardId={card.id}></CardImage>
                </div>
              )
            })}
          </div>
          </>
        )}
        {error && (
            <p> oopsies</p>
        )}
        </>
        
    )
}

export default CardArray;