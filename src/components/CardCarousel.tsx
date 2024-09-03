import { useRef } from "react"
import { CardData } from "../utils/cardInterfaces"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface props {
    cardArray: CardData[]
}

function CardCarousel({ cardArray }: props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full flex items-center mx-4 z-0">
            <button
                onClick={scrollLeft}
                className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full ml-2"
            >
                <ArrowLeft size={12} />
            </button>
    
            <div
                ref={scrollRef}
                className="snap-mandatory snap-x flex overflow-x-auto w-full scrollbar-hide gap-2"
            >
                {cardArray.map((card, index) => (
                    <div key={index} className="snap-center flex-shrink-0 w-40">
                        <a href={`/cards/${card.id}`}>
                            <img
                                src={card.large_image}
                                alt="Pokemon card image"
                                className="w-full h-72 object-contain rounded-lg"
                            />
                        </a>
                    </div>
                ))}
            </div>
    
            <button
                onClick={scrollRight}
                className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full mr-2"
            >
                <ArrowRight size={12} />
            </button>
        </div>
    );
    
};

export default CardCarousel