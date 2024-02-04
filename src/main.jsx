import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <BrowserRouter>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  </BrowserRouter>
  </ThemeProvider>
)
