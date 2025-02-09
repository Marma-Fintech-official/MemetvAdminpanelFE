import { useEffect, useState } from "react";
import api from "../utils/api";

export default function UserRewards() {
  const [userRewards, setUserRewards] = useState([]);

  useEffect(() => {
    const fetchUserRewards = async () => {
      try {
        const response = await api.get("/getIndividualrewards"); // Fetch from backend
        setUserRewards(response.data); // Store response data
      } catch (error) {
        console.error("Error fetching user rewards:", error);
      }
    };

    fetchUserRewards();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Individual User Rewards</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Name</th>
              <th className="text-right p-2">Rewards</th>
            </tr>
          </thead>
          <tbody>
            {userRewards.length > 0 ? (
              userRewards.map((user) => (
                <tr key={user.telegramId} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="text-right p-2">{user.balanceRewards.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center p-2">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}



// import { useEffect, useState } from 'react'
// import api from '../utils/api'

//   export default function UserRewards() {
//     const [userRewards, setUserRewards] = useState([]);

//     useEffect(()=>{
//       const fetchUserRewards = async()=>{
//       try{
//         const response = await api.get('/getIndividualrewards');
//         setUserRewards(response.data);

//       }catch(err){
//         console.error(('Error fetching user rewards:'), err)
//       }
//     }
//     },[])
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Individual User Rewards</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="text-left p-2">Name</th>
//                 <th className="text-right p-2">Rewards</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userRewards.map((user) => (
//                 <tr key={user.id} className="border-b">
//                   <td className="p-2">{user.telegramId}</td>
//                   <td className="text-right p-2">{user.balanceRewards.toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
//   }
  
  