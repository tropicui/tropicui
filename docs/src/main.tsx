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
    path: "/docs/",
    Component: App,
    children: [
      {
        index: true,
        Component: page.Introduction,
      },
      {
        path: "/docs/introduction",
        Component: page.Introduction,
      },
      {
        path: "/docs/installation",
        Component: page.Installation,
      },
      {
        path: "/docs/theming",
        Component: page.Theming,
      },
      {
        path: "/docs/content",
        children: [
          {
            index: true,
            loader: () => redirect("/docs/content/typography"),
          },
          {
            path: "/docs/content/typography",
            Component: page.Typography,
          },
        ]
      },
      {
        path: "/docs/components",
        children: [
          {
            index: true,
            loader: () => redirect("/docs/components/accordion"),
          },
          {
            path: "/docs/components/accordion",
            Component: page.Accordion,
          },
          {
            path: "/docs/components/alert",
            Component: page.Alert,
          },
          {
            path: "/docs/components/avatar",
            Component: page.Avatar,
          },
          {
            path: "/docs/components/badge",
            Component: page.Badge,
          },
          {
            path: "/docs/components/breadcrumb",
            Component: page.BreadcrumbPage,
          },
          {
            path: "/docs/components/button",
            Component: page.Button,
          },
          {
            path: "/docs/components/card",
            Component: page.Card,
          },
          {
            path: "/docs/components/checkbox",
            Component: page.Checkbox,
          },
          {
            path: "/docs/components/divider",
            Component: page.Divider,
          },
          {
            path: "/docs/components/drawer",
            Component: page.Drawer,
          },
          {
            path: "/docs/components/dropdown",
            Component: page.Dropdown,
          },
          {
            path: "/docs/components/form",
            Component: page.Form,
          },
          {
            path: "/docs/components/input",
            Component: page.Input,
          },
          {
            path: "/docs/components/menu",
            Component: page.Menu,
          },
          {
            path: "/docs/components/modal",
            Component: page.Modal,
          },
          {
            path: "/docs/components/popover",
            Component: page.Popover,
          },
          {
            path: "/docs/components/radio",
            Component: page.Radio,
          },
          {
            path: "/docs/components/select",
            Component: page.Select,
          },
          {
            path: "/docs/components/sink",
            Component: page.Sink,
          },
          {
            path: "/docs/components/spinner",
            Component: page.Spinner,
          },
          {
            path: "/docs/components/status",
            Component: page.Status,
          },
          {
            path: "/docs/components/switch",
            Component: page.Switch,
          },
          {
            path: "/docs/components/tab",
            Component: page.Tab,
          },
          {
            path: "/docs/components/table",
            Component: page.Table,
          },
          {
            path: "/docs/components/tag",
            Component: page.Tag,
          },
          {
            path: "/docs/components/textarea",
            Component: page.Textarea,
          },
          {
            path: "/docs/components/toast",
            Component: page.Toast,
          },
          {
            path: "/docs/components/tooltip",
            Component: page.Tooltip,
          },
        ]
      },
      {
        path: "/docs/utilities",
        children: [
          {
            index: true,
            loader: () => redirect("/docs/utilities/float"),
          },
          {
            path: "/docs/utilities/float",
            Component: page.Float,
          },
          {
            path: "/docs/utilities/join",
            Component: page.Join,
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
