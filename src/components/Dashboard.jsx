import TotalUsers from "./TotalUsers"
import DailyUsers from "./DailyUsers"
import TotalPoints from "./TotalPoints"
import GoogleAnalytics from "./GoogleAnalytics"
import UserRewards from "./UserRewards"

export default function Dashboard() {
  return (
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
  )
}

