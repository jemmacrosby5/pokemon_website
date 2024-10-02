import { useEffect, useState } from "react";
import { fetchAllCards } from "../utils/APICaller";
import { SimpleCardData } from "../utils/interfaces";
import LightningBoltLoader from "../components/LoadingSkeletons/LightningBolt";
import CardImage from "../components/CardImage";
import { SmileySad } from "@phosphor-icons/react";
import Paginator from "../components/Paginator";

function CardPage() {
  const [startNumber, setStartNumber] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [cardData, setCardData] = useState<SimpleCardData[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  async function loadCardData() {
    setLoading(true)
    try {
      const data = await fetchAllCards(startNumber, (startNumber+20));
      setCardData(data);
      setLoading(false);

    } catch (e) {
      console.error('Error loading card data:', e);
      setLoading(false);
      setError(true);
    }
  }

  const increasePage = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  const decreasePage = () => {
    setPageNumber((pageNumber) => (pageNumber > 1 ? pageNumber - 1 : 1));
  };

  useEffect(() => {
    setStartNumber((pageNumber - 1) * 20);
  }, [pageNumber]);

  useEffect(() => {
    loadCardData();
  }, [startNumber]);

  return (
    <>
      <div className="py-6 px-10 flex flex-col gap-4">
        <h1 className="font-bold text-3xl mb-4">All Cards</h1>
        <Paginator
          pageNumber={pageNumber}
          increasePage={increasePage}
          decreasePage={decreasePage}
        />
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[75vh]">
            <div className='h-60 w-60'>
              <LightningBoltLoader />
            </div>
            <p className='text-3xl text-slate-700'>Loading cards...</p>
          </div>
        ) : error ? (
          <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4">
            <SmileySad size={32} color="white" />
            <p className="text-white font-bold">Sorry, we can't get the cards right now...</p>
          </div>
        ) : (
          <>
            {cardData && cardData?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cardData.map((card, key) => (
                  <CardImage key={key}URL={card?.large_image} clickable={true} cardId={card?.id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default CardPage