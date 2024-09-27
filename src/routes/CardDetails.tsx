import { useEffect, useState } from 'react';
import { CardData, SetPriceData } from '../utils/interfaces.ts';
import { fetchCardAvgPrices, fetchCardData } from '../utils/APICaller.ts';
import CardImage from '../components/CardImage.tsx';
import { useParams } from 'react-router-dom';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt.tsx';
import { ArrowCircleRight } from '@phosphor-icons/react';
import HPDetails from '../components/HP.tsx';

function CardDetails() {
    const [cardData, setCardData] = useState<CardData | undefined>(undefined);
    const [avgPrices, setAvgPrices] = useState<SetPriceData | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const { cardId } = useParams();

    async function loadCardData() {
        try {
            if (cardId) {
                const data = await fetchCardData(cardId);
                console.log(data)
                setCardData(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading card data:', e);
            setLoading(false);
            setError(true);
        }
    }

    async function loadCardAvgPrices() {
        try {
            if (cardId) {
                const data = await fetchCardAvgPrices(cardId);
                setAvgPrices(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading card data:', e);
            setLoading(false);
            setError(true);
        }
    }



    useEffect(() => {
        loadCardData();
        loadCardAvgPrices();
    }, [cardId]);

    return (
        <div >
            {loading ? (
                <div className="flex flex-col items-center justify-center h-[75vh]">
                    <div className='h-60 w-60'>
                        <LightningBoltLoader />
                    </div>
                    <p className='text-3xl text-slate-700'>Loading card details...</p>
                </div>
            ) : (
                <>
                    <div className='flex flex-col md:flex-row mx-10 my-8 w-fill '>
                        <div className='flex m-4 gap-4 justify-center md:w-1/2'>
                            {cardData?.large_image && (
                                <CardImage URL={cardData?.large_image} clickable={false} cardId={cardData?.card_id}/>
                            )}

                        </div>
                        <div className='flex flex-col w-full align-middle bg-slate-200 rounded px-8 py-4 relative'>
                            <div className='border-stone-950 border-b-2 flex flex-col md:flex-row justify-between'>
                                <div>
                                    <p className='text-2xl font-extrabold'><b>{(cardData?.name)?.toUpperCase()}</b></p>
                                    <p className='text-lg'>{cardData?.supertype} - {cardData?.subtype}</p>
                                </div>
                                {cardData?.hp !== undefined &&
                                    <div className='justify-end'>
                                        <HPDetails value={cardData?.hp} type={cardData?.primaryType}/>
                                        <p className='text-lg'>PokeDex no. {cardData?.number}</p>
                                    </div>
                                }
                            </div>

                            <div className='flex flex-col gap-4 mt-4'>
                                <h2 className='font-bold'>PRICES</h2>
                                <div className='flex w-fit flex-col md:flex-row justify-center'>
                                    <p> CardMarket Averages</p>
                                    <div className='flex flex-row gap-4 justify-between w-full'>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>1 DAY </p>
                                            <p className='text-lg'>£ {(avgPrices?.cardmarket[2]?.cardmarket_avg_last_1d)?.toFixed(2)}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>7 DAY</p>
                                            <p className='text-lg'>£ {(avgPrices?.cardmarket[1]?.cardmarket_avg_last_7d)?.toFixed(2)}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>30 DAY</p>
                                            <p className='text-lg'>£ {(avgPrices?.cardmarket[0]?.cardmarket_avg_last_30d)?.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-fit justify-center flex-col md:flex-row'>
                                    <p> TCGPlayer Averages</p>
                                    <div className='flex flex-row gap-4 justify-between w-full'>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>1 DAY </p>
                                            <p className=' text-lg'>£ {(avgPrices?.tcgplayer[2]?.tcgplayer_avg_last_1d)?.toFixed(2)}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>7 DAY</p>
                                            <p className='text-lg'>£ {(avgPrices?.tcgplayer[1]?.tcgplayer_avg_last_7d)?.toFixed(2)}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm'>30 DAY</p>
                                            <p className='text-lg'>£ {(avgPrices?.tcgplayer[0]?.tcgplayer_avg_last_30d)?.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-slate-400 rounded p-2 ml-auto flex items-center gap-2 w-fit self-end mt-6'
                                onClick={() => window.location.href = `/sets/${cardData?.set_id}`}>
                                <p>See full set</p>
                                <ArrowCircleRight size={20} />
                            </button>
                        </div>
                    </div>
                </>

            )}
            {error && (
                <div>
                    <p>oh no theres an error</p>
                </div>
            )}
        </div>
    )
}

export default CardDetails