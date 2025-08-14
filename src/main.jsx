import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import UseCases from './pages/UseCases.jsx'
import Pricing from './pages/Pricing.jsx'
import Blog from './pages/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="usecases" element={<UseCases />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
)
