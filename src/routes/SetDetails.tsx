import { useParams } from 'react-router-dom';

function SetDetails() {

  const { setId } = useParams();

  return (
    <>
      <p> Set Details For:</p>
      <p>{setId}</p>
    </>
  )
}

export default SetDetails