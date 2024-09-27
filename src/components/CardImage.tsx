interface props {
  URL: string;
  clickable: boolean;
  cardId: string;
}

function CardImage({ URL, clickable, cardId }: props) {
  return (
      <div>
        {clickable ? (
          <a href={`/cards/${cardId}`}>
            <img src={URL} alt="Card image" className="rounded-lg"></img>
          </a>
        ) :
          <img src={URL} alt="Card image" className="rounded-lg"></img>
        }
      </div>
  )
}

export default CardImage