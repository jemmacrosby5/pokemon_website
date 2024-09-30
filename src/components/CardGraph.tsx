import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { GraphData } from '../utils/interfaces';
import { fetchCardGraph } from '../utils/APICaller';
import { useParams } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceGraph: React.FC = () => {
    const [graphData, setGraphData] = useState<GraphData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const { cardId } = useParams();

    async function loadGraphData() {
        setLoading(true)
        try {
            if (cardId) {
                const data = await fetchCardGraph(cardId);
                setGraphData(data);
                setLoading(false);
            }
        } catch (e) {
            console.error('Error loading card data:', e);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        loadGraphData();
    }, [cardId]);

    const chartData = {
        labels: graphData?.cardmarket.map(item => {
            const date = new Date(item.date);
            return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
        }),
        datasets: [
            {
                label: 'Cardmarket',
                data: graphData?.cardmarket.map(item => item.price),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'TCGPlayer',
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
                labels: {
                    font: {
                        size: 16, 
                        color: 'black',
                    },
                },
            },
            title: {
                display: false,
                text: 'Price Comparison Chart',
                color: 'black',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    font: {
                        size: 16,
                        color: 'black',
                    },
                },
                ticks: {
                    font: {
                        size: 16,
                        color: 'black',
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                    font: {
                        size: 20,
                        color: 'black',
                    },
                    ticks: {
                        font: {
                            size: 16,
                            color: 'black',
                        },
                    },
                },
                beginAtZero: false,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default PriceGraph;