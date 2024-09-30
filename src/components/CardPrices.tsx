import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SetPriceData } from "../utils/interfaces";
import { fetchCardAvgPrices } from "../utils/APICaller";
import LightningBoltLoader from "./LoadingSkeletons/LightningBolt";
import { SmileySad } from "@phosphor-icons/react";

function CardPrices() {
    const { cardId } = useParams();

    const [prices, setPrices] = useState<SetPriceData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    async function loadCardAvgPrices() {
        try {
            if (cardId) {
                const data = await fetchCardAvgPrices(cardId);
                setPrices(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading card price data:', e);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        loadCardAvgPrices();
    }, [cardId]);

    return (
        <>
            {loading ? (
                <div className="flex flex-col items-center justify-center h-[33vh]">
                    <div className='h-40 w-40'>
                        <LightningBoltLoader />
                    </div>
                    <p className='text-3xl text-slate-700'>Loading prices...</p>
                </div>
            ) : error ? (
                <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4">
                    <SmileySad size={32} color="white" />
                    <p className="text-white font-bold">Sorry, we can't get the card prices right now...</p>
                </div>
            ) : (
                <div className="flex flex-col gap-8">
                    <div className='flex w-full flex-col justify-center md:px-10'>
                        <p className="font-bold text-lg border-b-black border-b-2 mb-2 ">CardMarket Averages</p>
                        <div className='flex flex-row gap-6 md:mx-4'>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>1 DAY </p>
                                <p className='text-lg md:text-xl'>£ {(prices?.cardmarket[2]?.cardmarket_avg_last_1d)?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>7 DAY</p>
                                <p className='text-lg md:text-xl'>£ {(prices?.cardmarket[1]?.cardmarket_avg_last_7d)?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>30 DAY</p>
                                <p className='text-lg md:text-xl'>£ {(prices?.cardmarket[0]?.cardmarket_avg_last_30d)?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full flex-col justify-center md:px-10'>
                        <p className="font-bold text-lg border-b-black border-b-2 mb-2">TCGPlayer Averages</p>
                        <div className='flex flex-row gap-6 md:mx-4'>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>1 DAY </p>
                                <p className='text-lg md:text-xl'>£ {(prices?.tcgplayer[2]?.tcgplayer_avg_last_1d)?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>7 DAY</p>
                                <p className='text-lg md:text-xl'>£ {(prices?.tcgplayer[1]?.tcgplayer_avg_last_7d)?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-md'>30 DAY</p>
                                <p className='text-lg md:text-xl'>£ {(prices?.tcgplayer[0]?.tcgplayer_avg_last_30d)?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CardPrices;