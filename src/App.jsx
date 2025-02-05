import TotalUsers from "./components/TotalUsers"
import DailyUsers from "./components/DailyUsers"
import TotalPoints from "./components/TotalPoints"
import GoogleAnalytics from "./components/GoogleAnalytics"
import UserRewards from "./components/userRewards"

export default function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
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
  )
}

