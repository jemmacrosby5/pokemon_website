import { useEffect, useState } from "react";
import { fetchTotalValue } from "../utils/APICaller";
import '../styles/animations.css';

function TotalValueBox() {
    const [totalValue, setTotalValue] = useState<String>("0");
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);

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
            <div className="flex flex-col gap-4 items-center mx-auto">

                {loading ? (
                    <div className="border border-white rounded-xl text-center py-1 px-4">
                        <div className="flex space-x-2 items-center">
                            <p className="text-white text-3xl ">
                                £
                            </p>
                            <div className="w-4 h-4 bg-white rounded-full animation-bounce"></div>
                            <div className="w-4 h-4 bg-white rounded-full animation-bounce animation-delay-200"></div>
                            <div className="w-4 h-4 bg-white rounded-full animation-bounce animation-delay-400"></div>
                        </div>
                    </div>

                ) : (

                    <div className="border border-white rounded-xl text-center py-1 px-4">
                        <p className="text-white text-3xl">
                            £ {totalValue}
                        </p>

                    </div>
                )}
                <p className="text-white text-3xl text-center mt-2">Current value</p>
                {error && <p className="text-red-500">Error loading value</p>}
            </div>
        </>
    );
}

export default TotalValueBox;

