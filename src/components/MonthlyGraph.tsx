import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { GraphData } from '../utils/interfaces';
import { fetchHomePageGraph } from '../utils/APICaller';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceGraph: React.FC = () => {
    const [graphData, setGraphData] = useState<GraphData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    // to fix!!
    console.log(loading)
    console.log(error)

    async function loadGraphData() {
        setLoading(true)
        try {
            const data = await fetchHomePageGraph();
            setGraphData(data);
            setLoading(false);
        } catch (e) {
            console.error('Error loading card data:', e);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        loadGraphData();
    }, []);

    const chartData = {
        labels: graphData?.cardmarket.map(item => {
            const date = new Date(item.date);
            return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
        }),
        datasets: [
            {
                label: 'CARDMARKET',
                data: graphData?.cardmarket.map(item => item.price),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'TCGPLAYER',
                data: graphData?.tcgplayer.map(item => item.price),
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                fill: true,
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Price Comparison Chart',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price /£',
                },
                beginAtZero: false,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default PriceGraph;