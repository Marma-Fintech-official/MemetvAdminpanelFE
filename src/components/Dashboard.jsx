import { useState, useEffect } from "react"
import api from "../utils/api"
import TotalUsers from "./TotalUsers"
import DailyUsers from "./DailyUsers"
import TotalPoints from "./TotalPoints"
import GoogleAnalytics from "./GoogleAnalytics"
import UpdatePassword from "./UpdatePassword"
import UserRewards from "./userRewards"

export default function Dashboard({ userEmail, setIsAuthenticated }) {
  const [showUpdatePassword, setShowUpdatePassword] = useState(false)

  useEffect(() => {
    const email = localStorage.getItem("userEmail")
    if (email) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("adminToken")
      await api.post("/logout", {}, { headers: { Authorization: `Bearer ${token}` } })
      localStorage.removeItem("adminToken")
      localStorage.removeItem("userEmail")
      setIsAuthenticated(false)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (showUpdatePassword) {
    return (
      <UpdatePassword
        email={userEmail}
        onPasswordUpdated={() => setShowUpdatePassword(false)}
        onCancel={() => setShowUpdatePassword(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold">TheMemetv Tracker</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">{userEmail}</span>
              <button onClick={() => setShowUpdatePassword(true)} 
                className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
                Update Password
              </button>
              <button onClick={handleLogout} 
                className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TotalUsers />
          <DailyUsers />
          <TotalPoints />
          <GoogleAnalytics />
        </div>
        <div className="mt-6">
          <UserRewards />
        </div>
      </div>
    </div>
  )
}

// import TotalUsers from "./TotalUsers"
// import DailyUsers from "./DailyUsers"
// import TotalPoints from "./TotalPoints"
// import GoogleAnalytics from "./GoogleAnalytics"
// import UserRewards from "./UserRewards"
// import UpdatePassword from "./UpdatePassword"
// import { useEffect, useState } from "react"
// import api from '../utils/api'

// export default function Dashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [showUpdatePassword, setShowUpdatePassword] = useState(false)
//   const [userEmail, setUserEmail] = useState("")

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     const email = localStorage.getItem("userEmail");

//     if (token) {
//       setIsAuthenticated(true)
//       // You might want to validate the token here
//       setUserEmail(email || "")
//     }
//   }, [])

  

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("adminToken")
//       await api.post(
//         "/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       )
//       localStorage.removeItem("adminToken")
//       localStorage.removeItem("userEmail")
//       setIsAuthenticated(false)
//       setUserEmail("")
//       setShowUpdatePassword(false)
//     } catch (error) {
//       console.error("Logout error:", error)
//       // Handle logout error (e.g., show a message to the user)
//     }
//   }

//   // if (!isAuthenticated) {
//   //   return <SignIn onLogin={handleLogin} />
//   // }

//   if (showUpdatePassword) {
//     return (
//       <UpdatePassword
//         email={userEmail}
//         onPasswordUpdated={() => setShowUpdatePassword(false)}
//         onCancel={() => setShowUpdatePassword(false)}
//       />
//     )
//   }
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <span className="text-xl font-semibold">TheMemetv Tracker</span>
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-500">{String(userEmail)}</span>
//               <button onClick={() => setShowUpdatePassword(true)} 
//               // className= "px-4 py-2 bg-blue-100 text-blue-700 hover:text-blue-300">
//               className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
//               Update Password
//               </button>
//               <button onClick={handleLogout} 
//               // className="px-4 py-2 bg-blue-100 text-red-600 hover:text-red-300">
//               className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <TotalUsers />
//         <DailyUsers />
//         <TotalPoints />
//         <GoogleAnalytics />
//       </div>
//       <div className="mt-6">
//         <UserRewards />
//       </div>
//     </div>    </div>
    
//   )
// }

