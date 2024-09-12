import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center align-middle p-10 gap-6" id="error-page">
      <h1 className="font-bold text-xl">Womp womp, somethings gone wrong...</h1>
      <img src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" className="max-w-96"></img>
    </div>
  );
}