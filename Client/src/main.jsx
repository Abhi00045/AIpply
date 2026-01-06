// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './Pages/Mainpage'

import { Applications } from './Pages/Applicant/Applications'
// import { FindJobsForApplicant, JobApplicant, MockInterviewForApplicant } from './Components/Applicant.main.jsx'
import {JobApplicant } from './Components/Applicant.main.jsx'

import { Signup } from './Pages/Authentication/Signup.jsx'
import { Login } from './Pages/Authentication/Login.jsx'
import VideoCallDashboard from './Components/Agent/videoCallBoard.jsx'


const router = createBrowserRouter([
      {
        element:<Mainpage/>,
        path:"/"
      },
      {
        element:<JobApplicant/>,
        path:'/applicant',
      },
      {
      element:<VideoCallDashboard/>,
      path:'/mock'
      },
          // // {
          // //   element:<Profile/>,
          // //   path:"/applicant/profile"
          // // },
          // {
          //   element:<MockInterviewForApplicant/>,
          //   path:"/applicant/MockInterviews"
          // },
          // {
          //   element:<Applications/>,
          //   path:"/applicant/applications"
          // },
      {
        element:<Signup/>,
        path:"/signup"
      },
      {
        element:<Login/>,
        path:"/login"
      },

])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
