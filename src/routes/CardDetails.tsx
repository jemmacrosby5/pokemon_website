import { useEffect, useState } from 'react';
import { CardData } from '../utils/interfaces.ts';
import { fetchCardData } from '../utils/APICaller.ts';
import CardImage from '../components/CardImage.tsx';
import { useParams } from 'react-router-dom';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt.tsx';
import { ArrowCircleRight, SmileySad } from '@phosphor-icons/react';
import HPDetails from '../components/HP.tsx';
import CardPrices from '../components/CardPrices.tsx';
import CardGraph from '../components/CardGraph.tsx';

function CardDetails() {
    const [cardData, setCardData] = useState<CardData | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const { cardId } = useParams();

    async function loadCardData() {
        try {
            if (cardId) {
                const data = await fetchCardData(cardId);
                setCardData(data);
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
                    <div className='flex flex-col md:flex-row m-6 md:m-14 w-fill z-0 gap-8 md:gap-24'>
                        <div className='flex m-4 gap-4 justify-center md:w-1/3'>
                            {cardData?.large_image && (
                                <CardImage URL={cardData?.large_image} clickable={false} cardId={cardData?.card_id} />
                            )}

                        </div>
                        <div className='flex flex-col w-full align-middle bg-slate-200 rounded px-8 py-4'>
                            <div className='border-stone-950 border-b-2 flex flex-col md:flex-row justify-between'>
                                <div>
                                    <p className='text-2xl font-extrabold'><b>{(cardData?.name)?.toUpperCase()}</b></p>
                                    <p className='text-lg'>{cardData?.supertype} - {cardData?.subtype}</p>
                                </div>
                                {cardData?.hp !== null &&
                                    <div className='justify-end'>
                                        <HPDetails value={cardData?.hp} type={cardData?.primaryType} />
                                        <p className='text-lg'>PokeDex no. {cardData?.number}</p>
                                    </div>
                                }
                            </div>

                            <div className='flex items-center'>
                                <div className='flex flex-col gap-2 mt-4'>
                                    <h2 className='font-bold text-xl'>PRICES</h2>
                                    <CardPrices />
                                </div>
                                <div>
                                    <CardGraph />
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
                <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4">
                    <SmileySad size={32} color="white" />
                    <p className="text-white font-bold">Sorry, we can't get the card details right now...</p>
                </div>
            )}
        </div>
    )
}

export default CardDetails