import { useEffect, useState } from 'react'
import api from '../utils/api'
export default function TotalUsers() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(()=>{
    const fetchTotalUsers = async () => {
    try{
      const response = await api.get('./getTotalusers');
      setTotalUsers(response.data.totalUsers)
    }catch(error){
      console.error('Error fetching total users:', error);
    }
  }
  fetchTotalUsers();
  },[])
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      </div>
      <div className="text-3xl font-bold">{totalUsers.toLocaleString()}</div>
      <p className="text-sm text-gray-500">+20.1% from last month</p>
    </div>
  )
}

