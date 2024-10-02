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
            console.error('Error loading top ten data:', e);
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
                    <div className='h-40 w-40'>
                        <LightningBoltLoader />
                    </div>
                    <p className='text-xl text-slate-700'>Loading card details...</p>
                </div>
            ) : (
                <>
                    <table className="table-auto border-collapse border border-slate-400">
                        <tr className='border border-slate-400'>
                            <th className='border border-slate-400 text-center px-2'>Rank</th>
                            <th className='border border-slate-400 text-center px-2'>Card</th>
                            <th className='border border-slate-400 text-center px-2'>Set</th>
                            <th className='border border-slate-400 text-center px-2'>CM 7 day</th>
                            <th className='border border-slate-400 text-center px-2'>CM 30 day</th>
                            <th className='border border-slate-400 text-center px-2'>TCG 7 day</th>
                            <th className='border border-slate-400 text-center px-2'>TCG 30 day</th>
                        </tr>
                        <tbody className='border border-slate-600'>
                        {tableData?.map((row, index)=> {
                            return(<tr>
                                <td className='border border-slate-400 text-center px-2'>{index+1}</td>
                                <td className='border border-slate-400 text-center px-2'><a href={`/cards/${row.id}`}>{row.card_name}</a></td>
                                <td className='border border-slate-400 text-center px-2'><img className="h-6"src={row.symbol}/></td>
                                <td className='border border-slate-400 text-center px-2'>£{row.cardmarket_avg_last_7d.toFixed(2)}</td>
                                <td className='border border-slate-400 text-center px-2'>£{row.cardmarket_avg_last_30d.toFixed(2)}</td>
                                <td className='border border-slate-400 text-center px-2'>£{row.tcgplayer_avg_last_7d.toFixed(2)}</td>
                                <td className='border border-slate-400 text-center px-2'>£{row.tcgplayer_avg_last_30d.toFixed(2)}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>

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