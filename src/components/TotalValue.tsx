import { useEffect, useState } from "react";
import { fetchTotalValue } from "../utils/APICaller";

function TotalValueBox() {
    const [totalValue, setTotalValue] = useState<String>("0")
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);

    //placeholder to get rid of build errors
    console.log(loading)
    console.log(error)

    async function loadTotalValue() {
        setLoading(true);
        setError(false);

        try {
            const data = await fetchTotalValue();
            const formattedTotal = Math.round(data.total_cardmarket).toString();
            setTotalValue(formattedTotal);
        } catch (error) {
            setError(true);
            console.error("Error loading total value:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadTotalValue();
    }, []);

    return (
        <>
            <div className='flex flex-col gap-4 items-center mx-auto'>
                <p className="text-white text-3xl border border-white rounded-xl text-center py-1 px-4">£ {totalValue}</p>
                <p className="text-white text-3xl text-center mt-2">Current value</p>
            </div>
        </>
    )
}

export default TotalValueBox