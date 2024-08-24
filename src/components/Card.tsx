import { useEffect, useState } from 'react';
import { TestCardData } from '../testDataInterface.ts';
import { fetchCardData } from '../utils/APICaller.ts';
import CardImage from './CardImage.tsx';

function Card() {
  const [cardData, setCardData] = useState<TestCardData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function loadCardData() {
    try {
      const data: TestCardData | undefined = await fetchCardData();
      setCardData(data);
      console.log(data)
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
      <p>Name: {cardData?.data.name}</p>
      <p>Image URL: {cardData?.data?.images?.large}</p>
      {cardData?.data?.images?.large && (
        <CardImage URL={cardData.data.images.large} clickable={false} cardId={cardData?.data.id}/>
      )}
    </>
  )
}

export default Card