import { useEffect, useState } from 'react';
import { CardData } from '../utils/interfaces.ts';
import { fetchCardData } from '../utils/APICaller.ts';
import CardImage from '../components/CardImage.tsx';
import { useParams } from 'react-router-dom';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt.tsx';

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