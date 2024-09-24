import { useParams } from 'react-router-dom';
import { SetPriceData, Set } from '../utils/interfaces';
import { useEffect, useState } from 'react';
import { fetchSetMetadata, fetchSetPriceData } from '../utils/APICaller';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt';
import { SmileySad } from '@phosphor-icons/react';
import SetCardsGrid from '../components/SetCardsGrid';

function SetDetails() {
  const { setId } = useParams();

  const [setData, setSetData] = useState<Set>()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [setPrices, setSetPrices] = useState<SetPriceData>();
  const [priceLoading, setPriceLoading] = useState<boolean>(true);
  const [priceError, setPriceError] = useState<boolean>(false);

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

  async function loadSetPriceData() {
    try {
      if (setId) {
        const data = await fetchSetPriceData(setId);
        console.log(data)
        setSetPrices(data);
        setPriceLoading(false);
        console.log(priceLoading)
      }
    } catch (e) {
      console.error('Error loading set price data:', e);
      setPriceLoading(false);
      setPriceError(true);
      console.log(priceError)
    }
  }

  useEffect(() => {
    loadSetPriceData();
    loadSetMetaData();
  }, [setId]);
  return (
    <>
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
          <div className='bg-slate-200 flex justify-center p-4 rounded'>
            <div className='flex flex-col justify-center gap-2'>
              <div className='flex w-fit flex-col md:flex-row justify-center'>
                <p> CardMarket Averages</p>
                <div className='flex flex-row gap-4 justify-between w-full'>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>1 DAY </p>
                    <p className='text-lg'>£ {(setPrices?.cardmarket[2]?.cardmarket_avg_last_1d)?.toFixed(2)}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>7 DAY</p>
                    <p className='text-lg'>£ {(setPrices?.cardmarket[1]?.cardmarket_avg_last_7d)?.toFixed(2)}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>30 DAY</p>
                    <p className='text-lg'>£ {(setPrices?.cardmarket[0]?.cardmarket_avg_last_30d)?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className='flex w-fit justify-center flex-col md:flex-row'>
                <p> TCGPlayer Averages</p>
                <div className='flex flex-row gap-4 justify-between w-full'>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>1 DAY </p>
                    <p className=' text-lg'>£ {(setPrices?.tcgplayer[2]?.tcgplayer_avg_last_1d)?.toFixed(2)}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>7 DAY</p>
                    <p className='text-lg'>£ {(setPrices?.tcgplayer[1]?.tcgplayer_avg_last_7d)?.toFixed(2)}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm'>30 DAY</p>
                    <p className='text-lg'>£ {(setPrices?.tcgplayer[0]?.tcgplayer_avg_last_30d)?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className='text-2xl font-bold'>Cardlist:</h2>
          <SetCardsGrid />
        </div>
      )}
    </>
  )
}

export default SetDetails