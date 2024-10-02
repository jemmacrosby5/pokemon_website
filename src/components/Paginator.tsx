import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface props {
    pageNumber: number,
    increasePage: () => void;
    decreasePage: () => void;
}
const Paginator: React.FC<props> = ({ pageNumber, increasePage, decreasePage }) => {
    return (
        <div className="flex md:justify-end">
            <div className="flex items-center w-fit gap-2 border-2 rounded border-black">
                <button onClick={decreasePage} disabled={pageNumber <= 1}>
                    <CaretLeft size={32} />
                </button>
                <p className="text-xl font-bold border-l-2 border-r-2 px-4 border-black w-[110px] text-center">Page {pageNumber}</p>
                <button onClick={increasePage} >
                    <CaretRight size={32} />
                </button>
            </div>
        </div>
    )
}

export default Paginator;