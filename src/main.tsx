import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.tsx'
import Error from './routes/Error'
import Card from './routes/Card.tsx'
import Sets from './routes/Sets.tsx'
import SetDetails from './routes/SetDetails.tsx'
import About from './routes/About.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />
  },
  {
    path: "/card/:cardId",
    element: <Card />,
  },
  {
    path: "/sets",
    element: <Sets />,
  },
  {
    path: "/sets/:setId",
    element: <SetDetails />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
