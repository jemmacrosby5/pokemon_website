import { useParams } from 'react-router-dom';
import { SimpleCardData } from '../utils/interfaces';
import { useEffect, useState } from 'react';
import { fetchSetCards } from '../utils/APICaller';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt';
import { SmileySad } from '@phosphor-icons/react';
import CardImage from './CardImage';

function SetCardsGrid() {
    const { setId } = useParams();
    const [setCards, setSetCards] = useState<SimpleCardData[]>()
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);


    async function loadSetCards() {
        console.log("set cards")
        try {
            if (setId) {
                const data = await fetchSetCards(setId);
                console.log(data)
                setSetCards(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading set cards:', e);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        loadSetCards();
    }, [setId]);
    return (
        <>
            {loading ? (
                <div className="flex flex-col items-center justify-center h-[75vh]">
                    <div className='h-60 w-60'>
                        <LightningBoltLoader />
                    </div>
                    <p className='text-3xl text-slate-700'>Loading cards...</p>
                </div>
            ) : error ? (
                <>
                    <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4 mt-4">
                        <SmileySad size={32} color="white" />
                        <p className="text-white font-bold">Sorry, we can't get these cards right now...</p>
                    </div>
                </>
            ) : (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
                    {setCards?.map((card, index) => (
                        <div key={index} className='flex justify-center'>
                            <CardImage URL={card.large_image} clickable={true} cardId={card.id}></CardImage>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default SetCardsGrid