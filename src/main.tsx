import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CreateCharacter from './pages/CreateCharacter.tsx'
import Party from './pages/Party.tsx'
import Profile from './pages/Profile.tsx'
import Register from './pages/Register.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />
  },
  {
    path: "/CreateCharacter",
    element: <CreateCharacter />
  },
  {
    path: "/Party",
    element: <Party />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/register-request",
    element: <Register />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
