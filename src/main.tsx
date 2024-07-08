import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CompoundInterestCalculator from './components/CompoundInterestCalculator'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CompoundInterestCalculator />
  </React.StrictMode>
)
