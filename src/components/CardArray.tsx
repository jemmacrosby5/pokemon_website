import { useEffect, useState } from "react";
import { fetchMostExpensiveCards } from '../utils/APICaller.ts';
import { CardData } from "../utils/interfaces.ts";
import CardImage from "./CardImage.tsx";
import CardCarousel from "./CardCarousel.tsx";
import CardPageSkeleton from "./LoadingSkeletons/CardArray.tsx";
import { SmileySad } from "@phosphor-icons/react";

function CardArray() {

  const [cardArray, setCardArray] = useState<CardData[]>([]);
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  async function loadCardData() {
    try {
      const data = await fetchMostExpensiveCards();
      console.log(data)
      setCardArray(data);
      setLoading(false);
    }
    catch (e) {
      console.error('Error loading most expensive cards', e);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    loadCardData();
    
  }, []);

  return (
    <>
      <p className="text-xl mt-6 ml-20 font-bold">Top 5 most expensive cards:</p>
      {loading && (
        <>
          <CardPageSkeleton />
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
            <CardCarousel cardArray={cardArray} />
          </div>
        </>
      )}
      {error && (
                <>
                <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4">
                  <SmileySad size={32} color="white"/>
                  <p className="text-white font-bold">Sorry, this isn't working right now...</p>
                </div>
              </>
      )}
    </>

  )
}

export default CardArray;