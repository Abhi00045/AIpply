import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './Pages/Mainpage'
import { JobApplicant } from './Pages/Applicant/JobApplicant'

const router = createBrowserRouter([
  // {
  //   element:<Mainpage/>,
  //   children=[
      {
        element:<Mainpage/>,
        path:"/"
      },
      {
        element:<JobApplicant/>,
        path:'/applicant',
        // children:[
        //   {
        //     element:<
        //   }
        // ]
      }
  //   ]
  // }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
