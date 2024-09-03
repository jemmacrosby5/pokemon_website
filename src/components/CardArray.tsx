import { useEffect, useState } from "react";
import {fetchCardData} from '../utils/APICaller.ts';
import { CardData } from "../utils/cardInterfaces.ts";
import CardImage from "./CardImage.tsx";
import CardCarousel from "./CardCarousel.tsx";
import CardPageSkeleton from "./LoadingSkeletons/CardArray.tsx";

function CardArray(){

    const [cardArray, setCardArray] = useState<CardData[]>([]);
    const [error, setError] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const exampleCards: Array<string> = ['ex11-1', 'ex3-100', 'ex6-15', 'ex3-7', 'ex3-8'];
            
            const cardDataArray = await Promise.all(
              exampleCards.map(async (cardId) => {
                const cardData = await fetchCardData(cardId);
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
        <p className="text-xl mt-6 ml-20 font-bold">Top 5 most expensive cards:</p>
        {loading && (
          <>
            <CardPageSkeleton/>
            </>
        )}
        {!error && !loading && cardArray && (
            <>
            
            <div className="hidden lg:block">
            <div className="flex flex-col p-4 md:flex-row justify-center gap-4 overflow-hidden">
            {cardArray.map(function (card, index) {
              return (
                <div key={index}>
                  <CardImage URL={card.large_image} clickable={true} cardId={card.id}></CardImage>
                </div>
              )
            })}
            </div>
          </div>

          <div className="lg:hidden">
          <CardCarousel cardArray={cardArray}/>
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