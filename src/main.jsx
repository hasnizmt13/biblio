import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './component/NavBar.jsx'
import Hero from './component/Hero.jsx'
import Books from './component/Books.jsx'
import BookDetails from './component/BookDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NavBar/>
      <Hero/>
      <Books/>

      {/* <App /> */}
  </React.StrictMode>,
)
