import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as page from './pages/index'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: page.Introduction,
      },
      {
        path: "/introduction",
        Component: page.Introduction,
      },
      {
        path: "/installation",
        Component: page.Installation,
      },
      {
        path: "/components/accordion",
        Component: page.Accordion,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
