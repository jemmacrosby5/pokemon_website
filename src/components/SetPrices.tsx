import { useEffect, useState } from "react";
import { fetchSetPriceData } from "../utils/APICaller";
import { useParams } from "react-router-dom";
import { SetPriceData } from "../utils/interfaces";
import { SmileySad } from "@phosphor-icons/react";
import LightningBoltLoader from "./LoadingSkeletons/LightningBolt";

function SetPrices() {
    const { setId } = useParams();

    const [prices, setPrices] = useState<SetPriceData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    async function loadSetPriceData() {
        try {
            if (setId) {
                const data = await fetchSetPriceData(setId);
                console.log(data)
                setPrices(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading set price data:', e);
            setLoading(false);
            setError(true);
            console.log(error)
        }
    }

    useEffect(() => {
        loadSetPriceData();
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
                <div className="flex gap-2 items-center rounded bg-red-600 mx-16 p-2 px-4">
                    <SmileySad size={32} color="white" />
                    <p className="text-white font-bold">Sorry, we can't get the set prices right now...</p>
                </div>
            ) : (
                <div className='bg-slate-200 flex flex-col md:flex-row justify-center p-8 md:px-12 rounded gap-6'>
                    <div className='flex flex-col md:w-1/2 gap-2 md:px-8'>
                        <p className="font-bold text-xl border-b-black border-b-2"> CardMarket Averages</p>
                        <div className='flex flex-row gap-6 md:gap-8 w-full mt-4 justify-center'>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>1 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.cardmarket[2]?.cardmarket_avg_last_1d?.toFixed(2) || 'N/A'}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>7 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.cardmarket[1]?.cardmarket_avg_last_7d?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>30 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.cardmarket[0]?.cardmarket_avg_last_30d?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:w-1/2 gap-2 md:px-8'>
                    <p className="font-bold text-xl border-b-black border-b-2">TCGPlayer Averages</p>
                        <div className='flex flex-row gap-6 md:gap-8 w-full mt-4 justify-center'>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>1 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.tcgplayer[2]?.tcgplayer_avg_last_1d?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>7 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.tcgplayer[1]?.tcgplayer_avg_last_7d?.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm md:text-lg'>30 DAY</p>
                                <p className='text-lg md:text-2xl'>£ {prices?.tcgplayer[0]?.tcgplayer_avg_last_30d?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}

export default SetPrices