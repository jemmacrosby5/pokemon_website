import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface props {
    pageNumber: number,
    increasePage: () => void;
    decreasePage: () => void;
}
const Paginator: React.FC<props> = ({ pageNumber, increasePage, decreasePage }) => {
    console.log(pageNumber)
    return (
        <div className="flex">
            <button onClick={increasePage} disabled={pageNumber <= 1}>
                <CaretLeft size={32} />
            </button>
            <p className="font-xl">Page {pageNumber}</p>
            <button onClick={decreasePage}>
                <CaretRight size={32} />
            </button>
        </div>
    )
}

export default Paginator;