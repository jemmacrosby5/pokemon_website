import { useParams } from 'react-router-dom';
import { SetPriceData } from '../utils/interfaces';
import { useEffect, useState } from 'react';
import { fetchSetPriceData } from '../utils/APICaller';

function SetDetails() {

  const { setId } = useParams();

  const [setPrices, setSetPrices] = useState<SetPriceData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function loadSetPriceData() {
      try {
          if (setId) {
              const data = await fetchSetPriceData(setId);
              console.log(data)
              setSetPrices(data);
              setLoading(false);
          }
      } catch (e) {
          console.error('Error loading set price data:', e);
          setLoading(false);
          setError(true);
      }
  }

  useEffect(() => {
    loadSetPriceData();
  }, [setId]);
  return (
    <>
      <p> Set Details For:</p>
      <p>{setId}</p>
    </>
  )
}

export default SetDetails