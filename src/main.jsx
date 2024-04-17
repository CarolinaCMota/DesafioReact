import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Login } from '../src/pages/Login'
import { CriarConta } from "../src/pages/CriarConta"
import { Perfil } from '../src/pages/Perfil'
import { MoviePreview } from './pages/MoviePreview'
import {Home} from '../src/pages/Home'

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },

  {
    path: "/CriarConta",
    Component: CriarConta,
  },

  {
    path: "/perfil",
    Component: Perfil,
  },

  {
    path: "/MoviePreview",
    Component: MoviePreview,
  },

  {
    path: "/Home",
    Component: Home,
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

