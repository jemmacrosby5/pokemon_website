import { useParams } from 'react-router-dom';
import { Set } from '../utils/interfaces';
import { useEffect, useState } from 'react';
import { fetchSetMetadata } from '../utils/APICaller';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt';
import { SmileySad } from '@phosphor-icons/react';
import SetCardsGrid from '../components/SetCardsGrid';
import SetPrices from '../components/SetPrices';

function SetDetails() {
  const { setId } = useParams();

  const [setData, setSetData] = useState<Set>()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function loadSetMetaData() {
    try {
      if (setId) {
        const data = await fetchSetMetadata(setId);
        console.log(data)
        setSetData(data);
        setLoading(false);
      }
    } catch (e) {
      console.error('Error loading set price data:', e);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    loadSetMetaData();
  }, [setId]);
  return (
    <>
      <div className='md:px-12 md:py-6'>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[75vh]">
            <div className='h-60 w-60'>
              <LightningBoltLoader />
            </div>
            <p className='text-3xl text-slate-700'>Loading set details...</p>
          </div>
        ) : error ? (
          <>
            <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4 mt-4">
              <SmileySad size={32} color="white" />
              <p className="text-white font-bold">Sorry, we can't get this set right now...</p>
            </div>
          </>
        ) : (
          <div className='p-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <h1 className='text-3xl font-bold'>{setData?.name}</h1>
              <img className="max-h-10" src={setData?.symbol} alt={`${setData?.name} symbol`} />
            </div>
            <SetPrices />
            <h2 className='text-2xl font-bold'>Cardlist:</h2>
            <SetCardsGrid />
          </div>
        )}
      </div>
    </>
  )
}

export default SetDetails