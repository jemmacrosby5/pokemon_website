import React from 'react';
import '../../styles/animations.css'

const LightningBoltLoader: React.FC = () => {
    return (
        <div className='h-full w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="trace-path">
                <rect width="256" height="256" fill="none" />
                <polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16"
                    fill="none" 
                    stroke="grey"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                />
            </svg>

        </div>
    );
};

export default LightningBoltLoader;


