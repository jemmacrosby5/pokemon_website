import { useEffect, useState } from 'react';
import { TestCardData } from '../testDataInterface.ts';
import { fetchCardData } from '../utils/APICaller.ts';
import CardImage from './CardImage.tsx';
import CardPageSkeleton from './LoadingSkeletons/CardPage.tsx';

function Card() {
  const [cardData, setCardData] = useState<TestCardData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function loadCardData() {
    try {
      const data: TestCardData | undefined = await fetchCardData();
      setCardData(data);
      setLoading(false);
    } catch (e) {
      console.error('Error loading card data:', e);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    loadCardData();
  }, []);

  return (
    <>
      {loading ? (
        <CardPageSkeleton />
      ) : (
        <>
          <div className='flex flex-row m-4 gap-4'>
            {cardData?.data?.images?.large && (
              <CardImage URL={cardData.data.images.large} clickable={false} cardId={cardData?.data.id} />
            )}
            <div className=''>
              <p>Name: {cardData?.data?.name}</p>
              <p>ID: {cardData?.data?.id}</p>
            </div>
          </div>
        </>
      )}
    </>

  )
}

export default Card