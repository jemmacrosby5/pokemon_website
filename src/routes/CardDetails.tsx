import { useEffect, useState } from 'react';
import { CardData } from '../utils/cardInterfaces.ts';
import { fetchCardData } from '../utils/APICaller.ts';
import CardImage from '../components/CardImage.tsx';
import CardSkeleton from '../components/LoadingSkeletons/Card.tsx';
import { useParams } from 'react-router-dom';

function CardDetails() {
    const [cardData, setCardData] = useState<CardData | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const { cardId } = useParams();

    async function loadCardData() {
        try {
            if (cardId) { 
                const data = await fetchCardData(cardId);
                setCardData(data.data);
                console.log(cardData)
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
        <>
            {loading ? (
                <CardSkeleton />
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
            {error && (
                <p>oh no theres an error</p>
            )}
        </>

    )
}

export default CardDetails