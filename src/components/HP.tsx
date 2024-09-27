interface props {
    value: String,
    type: String
}
const HPDetails: React.FC<props> = ({value, type}) => {
    return (
        <>
        <div className="flex items-center gap-2"> 
        <p className='text-lg'>HP: {value}</p>
        <img src={`/type_icons/${type}.png`} className="h-6"></img>
        </div>
        </>
    );
}

export default HPDetails;