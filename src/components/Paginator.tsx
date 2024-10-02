import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface props {
    pageNumber: number,
    increasePage: () => void;
    decreasePage: () => void;
}
const Paginator: React.FC<props> = ({ pageNumber, increasePage, decreasePage }) => {
    return (
        <div className="flex md:justify-end m-2">
            <div className="flex items-center w-fit gap-2 border-2 rounded border-black">
                <button onClick={decreasePage} disabled={pageNumber <= 1}>
                    <CaretLeft size={28} />
                </button>
                <p className="text-lg font-bold border-l-2 border-r-2 px-2 border-black w-[110px] text-center">Page {pageNumber}</p>
                <button onClick={increasePage} >
                    <CaretRight size={28} />
                </button>
            </div>
        </div>
    )
}

export default Paginator;