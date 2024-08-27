'use client'

import { data } from '@/_data/countries';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chartjs.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
});

const Chart = () => {
    const options = {
        scales: {
            y: {
                grid: {
                    color: '#a7a7a7',
                },
                min: 1000000,
                max: 800000000000,
                ticks: {
                    stepSize: 10000000000,
                    callback: (value) => {
                        if (value >= 1000000000) {
                            return `${Math.floor(value / 1000000000)}bn`;
                        } else if (value >= 1000000) {
                            return `${Math.floor(value / 1000000)}m`;
                        }
                        return value;
                    },
                },
            },
            x: {
                grid: {
                    color: '#a7a7a7'
                }
            }
        },
        responsive: true,
        hoverRadius: 6,
        hoverBackgroundColor: 'orange',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x',
        },
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                enabled: true,
                filler: {
                    propagate: false,
                    drawTime: 'beforeDatasetsDraw',
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true,
                        },
                        mode: 'xy',
                    },
                },
            },
        }
    };



    return (
        <div className='px-4 grid grid-rows-1 grid-cols-1 rounded-lg bg-zinc-900'>
            <Line className='!w-full !h-full' data={data} options={options} />
        </div>
    )
}

export default Chart