import { useEffect, useState } from 'react';
import { TableCardInfo } from '../utils/interfaces.ts';
import { fetchTableData } from '../utils/APICaller.ts';
import LightningBoltLoader from '../components/LoadingSkeletons/LightningBolt.tsx';
import { SmileySad } from '@phosphor-icons/react';

function TopTenTable() {
    const [tableData, setTableData] = useState<TableCardInfo[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    async function loadTableData() {
        try {
                const data = await fetchTableData();
                console.log(data)
                setTableData(data);
                setLoading(false);
        } catch (e) {
            console.error('Error loading card data:', e);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        loadTableData();
        console.log(tableData)
    }, []);

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

export default TopTenTable