import { CardStyled } from "../styles/CardStyles";

interface props {
    URL: string;
    clickable: boolean;
    cardId: string;
}

function CardImage({URL}: props) {

  return (
    <>
      <div>
        <CardStyled src={URL} alt="Card image"></CardStyled>
      </div>
    </>
  )
}

export default CardImage