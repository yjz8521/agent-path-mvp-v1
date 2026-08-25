import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/figtree'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource-variable/noto-sans-tc'
import App from './App'
import './styles.css'
import './styles-v2.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
