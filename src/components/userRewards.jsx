import { useEffect, useState } from "react";
import api from "../utils/api";

export default function UserRewards() {
  const [userRewards, setUserRewards] = useState([]);
  const [search, setSearch] = useState(""); // Search input
  const [page, setPage] = useState(1); // Pagination
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  const fetchUserRewards = async () => {
    try {
      const response = await api.get(`/getIndividualrewards?page=${page}&search=${search}`);
      setUserRewards(response.data.data); // Extract user data
      setTotalPages(response.data.totalPages); // Store total pages
    } catch (error) {
      console.error("Error fetching user rewards:", error);
    }
  };

  useEffect(() => {
    fetchUserRewards();
  }, [page, search]); // Re-fetch when page or search changes

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Individual User Rewards</h2>

      {/* Search Input */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          onClick={() => setPage(1)} // Reset to first page on search
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Telegram ID</th>
              <th className="text-right p-2">Rewards</th>
            </tr>
          </thead>
          <tbody>
            {userRewards.length > 0 ? (
              userRewards.map((user) => (
                <tr key={user.name} className="border-b border-gray-200">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.telegramId || "N/A"}</td> {/* Display Telegram ID */}
                  <td className="text-right p-2">{user.balanceRewards.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-2">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 rounded-md ${page === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-md ${page >= totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        >
          Next
        </button>
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
  
  