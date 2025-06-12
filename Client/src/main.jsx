import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './Pages/Mainpage'
import { Profile } from './Pages/Applicant/Profile'
import { FindJobs } from './Pages/Applicant/FindJobs'

import { Applications } from './Pages/Applicant/Applications'
import { JobApplicant } from './Components/Applicant.main.jsx'

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
        children:[
          {

            element:<JobApplicant/>,
            path:'/applicant/dashboard'
          },
          {
            element:<Profile/>,
            path:"/applicant/profile"
          },
          {
            element:<FindJobs/>,
            path:"/applicant/findjobs"
          },
          {
            element:<Applications/>,
            path:"/applicant/applications"
          }
        ]
      }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
