import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import SignIn from "./components/SignIn"
import UpdatePassword from "./components/UpdatePassword"
import axios from "axios"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showUpdatePassword, setShowUpdatePassword] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    const email = localStorage.getItem("userEmail") //for displying user email on main page 

    if (token) {
      setIsAuthenticated(true)
      // You might want to validate the token here
      setUserEmail(email)
    }
  }, [])

  const handleLogin = (email) => {
    setIsAuthenticated(true)
    setUserEmail(email)
    localStorage.setItem("userEmail", email)
  }

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("adminToken")
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      localStorage.removeItem("adminToken")
      localStorage.removeItem("userEmail")
      setIsAuthenticated(false)
      setUserEmail("")
      setShowUpdatePassword(false)
    } catch (error) {
      console.error("Logout error:", error)
      // Handle logout error (e.g., show a message to the user)
    }
  }

  if (!isAuthenticated) {
    return <SignIn onLogin={handleLogin} />
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
              // className= "px-4 py-2 bg-blue-100 text-blue-700 hover:text-blue-300">
              className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
              Update Password
              </button>
              <button onClick={handleLogout} 
              // className="px-4 py-2 bg-blue-100 text-red-600 hover:text-red-300">
              className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Dashboard />
    </div>
  )
}





// import { useState } from "react"
// import Dashboard from "./components/Dashboard"
// import SignIn from "./components/SignIn"
// import UpdatePassword from "./components/updatePassword"
// import axios from 'axios';

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [showUpdatePassword, setShowUpdatePassword] = useState(false)
//   const [userEmail, setUserEmail] = useState("")

//   const handleLogin = (email) => {
//     setIsAuthenticated(true)
//     setUserEmail(email)
//   }

//   // const handleLogout = () => {
//   //   setIsAuthenticated(false)
//   //   setUserEmail("")
//   //   setShowUpdatePassword(false)
//   // }
//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Get the token from localStorage
//       if (!token) {
//         console.log("No token found, already logged out.");
//         setIsAuthenticated(false);
//         setUserEmail("");
//         setShowUpdatePassword(false);
//         return;
//       }
  
//       const response = await axios.post(
//         'http://localhost:8888/logout',
//         {},
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//           },
//         }
//       );
  
//       if (response.status === 200) {
//         console.log(response.data.message); // "Logout successful"
//         localStorage.removeItem("token"); // Remove token from localStorage
//         setIsAuthenticated(false);
//         setUserEmail("");
//         setShowUpdatePassword(false);
//       } else {
//         console.log(response.data.message); // Handle error if any
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//       setError(err.response?.data?.message || "Logout failed");

//     }
//   };
  

//   if (!isAuthenticated) {
//     return <SignIn onLogin={handleLogin} />
//   }

//   if (showUpdatePassword) {
//     return (
//       <UpdatePassword
//         email={userEmail}
//         onPasswordUpdated={() => setShowUpdatePassword(false)}
//         onCancel={() => setShowUpdatePassword(false)}
//       />
//     )
//   }

//   const baseURL = import.meta.env.VITE_BASE_URL;
//   console.log(baseURL); // http://localhost:8888

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <span className="text-xl font-semibold">TheMemetv Tracker</span>
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-500">{userEmail}</span>
//               <button onClick={() => setShowUpdatePassword(true)} className="text-blue-500 hover:text-blue-600">
//                 Update Password
//               </button>
//               <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Dashboard />  
//     </div>
//   )
// }

