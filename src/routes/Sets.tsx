import { useState, useEffect } from "react";
import { Set } from '../utils/interfaces'
import { fetchAllSets } from '../utils/APICaller.ts';
import SetCard from "../components/SetCard.tsx";
import LightningBoltLoader from "../components/LoadingSkeletons/LightningBolt.tsx";

function Sets() {
  const [setsData, setSetsData] = useState<Set[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function loadSetData() {
    try {
      const data = await fetchAllSets();
      setSetsData(data);
      setLoading(false);

    } catch (e) {
      console.error('Error loading card data:', e);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    loadSetData();
  }, []);

  return (
    <div className="py-6 px-10">
      <h1 className="font-bold text-3xl mb-4">All Sets</h1>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[75vh]">
        <div className='h-60 w-60'>
          <LightningBoltLoader />
        </div>
        <p className='text-3xl text-slate-700'>Loading sets...</p>
      </div>
      ) : error ? (
        <p>Error loading sets. Please try again later.</p>
      ) : (
        <>
          
          {setsData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {setsData.map((set) => (
                <SetCard key={set.id} set={set} />
              ))}
            </div>
          ) : (
            <p>No sets available.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Sets