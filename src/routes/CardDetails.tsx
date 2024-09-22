import { useEffect, useState } from 'react';
import { CardData, SetPriceData } from '../utils/interfaces.ts';
import { fetchCardAvgPrices, fetchCardData } from '../utils/APICaller.ts';
import CardImage from '../components/CardImage.tsx';
import { useParams } from 'react-router-dom';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt.tsx';

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
                console.log(data)
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
                    <div className='flex flex-row mx-10 my-8 w-fill'>
                        <div className='flex m-4 gap-4 justify-center w-1/2'>
                            {cardData?.large_image && (
                                <CardImage URL={cardData?.large_image} clickable={false} cardId={cardData?.card_id} />
                            )}

                        </div>
                        <div className='flex flex-col w-full align-middle bg-slate-200 rounded px-8 py-4'>
                            <div className='border-stone-950 border-b-2 flex justify-between'>
                                <div>
                                    <p className='text-2xl font-extrabold'><b>{(cardData?.name)?.toUpperCase()}</b></p>
                                    <p className='text-lg'>{cardData?.supertype} - {cardData?.subtype}</p>
                                </div>
                                <div className='justify-end'>
                                    <p className='text-lg '>HP {cardData?.hp}</p>
                                    <p className='text-lg'>PokeDex no. {cardData?.number}</p>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className='flex gap-2 justify-center items-center mt-2'>
                                <div className='flex flex-col bg-slate-400 rounded w-fit p-2 justify-center items-center'>
                                    <p className='text-white'> CardMarket </p>
                                    <p className='text-white'>30 Day Average</p>
                                    <p className='text-white text-lg'>£ {(avgPrices?.cardmarket[0]?.cardmarket_avg_last_30d)?.toFixed(2)}</p>
                                </div>
                                <div className='flex flex-col bg-slate-400 rounded w-fit p-2 justify-center items-center'>
                                    <p className='text-white'> TCG Player </p>
                                    <p className='text-white'>30 Day Average</p>
                                    <p className='text-white text-lg'>£ {(avgPrices?.tcgplayer[0].tcgplayer_avg_last_30d)?.toFixed(2)}</p>
                                </div>
                            </div>
                            <a href={`/sets/${cardData?.set_id}`}>
                                <p>See full set...</p>
                            </a>
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