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
            path: "/components/breadcrumb",
            Component: page.BreadcrumbPage,
          },
          {
            path: "/components/button",
            Component: page.Button,
          },
          {
            path: "/components/card",
            Component: page.Card,
          },
          {
            path: "/components/checkbox",
            Component: page.Checkbox,
          },
          {
            path: "/components/divider",
            Component: page.Divider,
          },
          {
            path: "/components/drawer",
            Component: page.Drawer,
          },
          {
            path: "/components/dropdown",
            Component: page.Dropdown,
          },
          {
            path: "/components/form",
            Component: page.Form,
          },
          {
            path: "/components/input",
            Component: page.Input,
          },
          {
            path: "/components/menu",
            Component: page.Menu,
          },
          {
            path: "/components/modal",
            Component: page.Modal,
          },
          {
            path: "/components/popover",
            Component: page.Popover,
          },
          {
            path: "/components/radio",
            Component: page.Radio,
          },
          {
            path: "/components/select",
            Component: page.Select,
          },
          {
            path: "/components/sink",
            Component: page.Sink,
          },
          {
            path: "/components/spinner",
            Component: page.Spinner,
          },
          {
            path: "/components/status",
            Component: page.Status,
          },
          {
            path: "/components/switch",
            Component: page.Switch,
          },
          {
            path: "/components/tab",
            Component: page.Tab,
          },
          {
            path: "/components/table",
            Component: page.Table,
          },
          {
            path: "/components/tag",
            Component: page.Tag,
          },
          {
            path: "/components/textarea",
            Component: page.Textarea,
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
