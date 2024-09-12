import { Set } from './../utils/interfaces';

interface Props {
    set: Set;
}

const SetCard: React.FC<Props> = ({ set }) => {
    return (
        <a href={`/sets/${set.id}`}>
            <div className='border border-slate-300 p-2 rounded shadow-sm hover:bg-slate-200 flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg font-bold'>{set.name}</h2>
                    <img className="max-h-10" src={set.symbol} alt={`${set.name} symbol`} />
                </div>

                <div>
                    <img className="h-20 items-center" src={set.logo} alt={`${set.name} logo`} />
                    <p>ID: {set.id}</p>
                    <p>Printed Total: {set.printed_total}</p>
                    <p>Total: {set.total}</p>
                </div>
            </div>
        </a>
    );
}

export default SetCard;

