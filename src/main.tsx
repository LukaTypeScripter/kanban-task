import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppContextProvider } from './contexts/Header.tsx'
import {MainContextProvider} from './contexts/MainContext.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <MainContextProvider>
    <App />
    </MainContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
)
