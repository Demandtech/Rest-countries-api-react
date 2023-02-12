import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import App from './App'
import { AppProviver } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProviver>
      <App />
    </AppProviver>
  </React.StrictMode>
)
