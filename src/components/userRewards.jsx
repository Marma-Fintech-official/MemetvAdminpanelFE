const userRewards = [
    { id: 1, name: "John Doe", rewards: 50000 },
    { id: 2, name: "Jane Smith", rewards: 45000 },
    { id: 3, name: "Bob Johnson", rewards: 38000 },
    { id: 4, name: "Alice Brown", rewards: 42000 },
    { id: 5, name: "Charlie Davis", rewards: 36000 },
  ]
  
  export default function UserRewards() {
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
              {userRewards.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="text-right p-2">{user.rewards.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  