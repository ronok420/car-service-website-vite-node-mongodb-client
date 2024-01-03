import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Provider from './Provider/Provider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl md:container md:mx-auto  md:pl-16 md:pr-16 '>
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>
  </div>
)
