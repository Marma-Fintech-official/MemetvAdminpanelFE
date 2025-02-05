import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 280 },
  { name: "Fri", users: 390 },
  { name: "Sat", users: 190 },
  { name: "Sun", users: 490 },
]

export default function DailyUsers() {
  const [activeTab, setActiveTab] = useState("daily")

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Total Daily Users</h2>
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${activeTab === "daily" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("daily")}
        >
          Daily
        </button>
        <button
          className={`px-3 py-1 rounded ${activeTab === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("weekly")}
        >
          Last 7 Days
        </button>
        <button
          className={`px-3 py-1 rounded ${activeTab === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
      </div>
      {activeTab === "daily" && (
        <div>
          <div className="text-3xl font-bold">500</div>
          <p className="text-sm text-gray-500">+15% from yesterday</p>
        </div>
      )}
      {activeTab === "weekly" && (
        <div>
          <div className="text-3xl font-bold mb-2">3,500</div>
          <p className="text-sm text-gray-500 mb-4">+10% from last week</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {activeTab === "monthly" && (
        <div>
          <div className="text-3xl font-bold">15,000</div>
          <p className="text-sm text-gray-500">+5% from last month</p>
        </div>
      )}
    </div>
  )
}

