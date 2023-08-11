import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import '@/styles/global.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('resource_download_background')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
