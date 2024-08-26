import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.tsx'
import Error from './routes/Error'
import Cards from './routes/Cards.tsx'
import CardDetails from './routes/CardDetails.tsx'
import Sets from './routes/Sets.tsx'
import SetDetails from './routes/SetDetails.tsx'
import About from './routes/About.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/cards/:cardId",
    element: <CardDetails />,
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
    <main>
    <RouterProvider router={router} />
    </main>
    <Footer/>
  </StrictMode>,
)
