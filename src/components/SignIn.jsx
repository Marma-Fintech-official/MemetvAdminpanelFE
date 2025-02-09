import { useState } from "react"
import axios from "axios"

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/adminLogin`, {
        email: email,
        password: password,
      })

      localStorage.setItem("adminToken", response.data.token)
      onLogin(email) // Pass the email to the parent component
    } catch (error) {
      console.error("Error:", error)
      setError(error?.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
         <div>
           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
         </div>
         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
           {error && <div className="text-red-500 text-sm text-center">{error}</div>}
           <div className="rounded-md shadow-sm space-y-4">
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Email address
               </label>
               <input
                 id="email"
                 name="email"
                 type="email"
                 autoComplete="email"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               />
             </div>
             <div>
               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                 Password
               </label>
               <input
                 id="password"
                 name="password"
                 type="password"
                 autoComplete="current-password"
                 required
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               />
             </div>
           </div>

           <div>
             <button
               type="submit"
               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
             >
               Sign in
             </button>
           </div>
         </form>
       </div>
     </div>
  )
}




// import { useState } from "react"
// import { Signin } from "./Api"
// import axios from "axios"

// export default function SignIn({ onLogin }) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
   
//     // This is a mock validation. In a real app, you would validate against your backend
//     if (!email || !password) {
//       setError("Please fill in all fields")
//       return
//     }

//     if (!email.includes("@")) {
//       setError("Please enter a valid email")
//       return
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters")
//       return
//     }

//     // Mock authentication - In a real app, you would verify credentials with your backend

//     try{
//       // const response = await Signin({email, password});
//       // console.log(response,'response');
      
//       axios.post("http://localhost:8888/adminLogin", {
//         email:email,
//         password:password
//       })
     
    
//     .then(response => {
//     localStorage.setItem("adminToken", response.data.token);
//         onLogin(); // Call parent function to update auth state
//   })
//       .catch(error =>{ console.error("Error:", error)

//         setError(error?.response?.data?.message)
//       });
//       // if(response.status === 200){
//       //   console.log("Login successful, routing to dashboard...");
//       //   localStorage.setItem("adminToken", response.data.token);
//       //   onLogin(); // Call parent function to update auth state
//       // }
//     }
//     catch(err){
//       console.log("the Error will be thrown",err);
//       setError(err.response?.data?.message || "Login failed");
//     }
// }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

