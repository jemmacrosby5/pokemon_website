import { CardStyled } from "../styles/CardStyles";

interface props {
  URL: string;
  clickable: boolean;
  cardId: string;
}

function CardImage({ URL, clickable, cardId }: props) {
  return (
    <>
      <div>
        {clickable ? (
          <a href={`/cards/${cardId}`}>
            <CardStyled src={URL} alt="Card image"></CardStyled>
          </a>
        ) :
          <CardStyled src={URL} alt="Card image"></CardStyled>
        }
      </div>
    </>
  )
}

export default CardImage