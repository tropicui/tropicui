import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as page from './pages'

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
        path: "/components",
        children: [
          {
            index: true,
            loader: () => redirect("/components/accordion"),
          },
          {
            path: "/components/accordion",
            Component: page.Accordion,
          },
          {
            path: "/components/alert",
            Component: page.Alert,
          },
          {
            path: "/components/avatar",
            Component: page.Avatar,
          },
          {
            path: "/components/badge",
            Component: page.Badge,
          },
          {
            path: "/components/button",
            Component: page.Button,
          },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
