import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Counter from './features/counter/Counter.jsx'
import About from './components/About.jsx'
import Todolist from './features/todolist/Todolist.jsx'
import Countries from './components/Countries.jsx'
import CountriesDetails from './components/CountriesDetails.jsx'
const rounter = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
    children: [
      {
        path:'counter',
        element: <Counter/>
      },
      {
        path:"Home",
        element:<Home/>
      },
      {
        path:"todolist",
        element:<Todolist/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"countries",
        element:<Countries/>,
        children:[
          {
            path:"countries/countiesDetails/:cname",
            element:<CountriesDetails/>
          }
        ]
      },
    ]
  },
  {
    path:'home',
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rounter}>
      
    </RouterProvider>
  </React.StrictMode>,
)
