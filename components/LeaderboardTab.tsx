import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const leaderboardData = [
  { name: "Liam Johnson", email: "liam@example.com", rank: 1, status: "Diamond", lastActive: "2024-09-28", points: 15234 },
  { name: "Olivia Smith", email: "olivia@example.com", rank: 2, status: "Platinum", lastActive: "2024-09-27", points: 14987 },
  { name: "Noah Williams", email: "noah@example.com", rank: 3, status: "Gold", lastActive: "2024-09-26", points: 13756 },
  { name: "Emma Brown", email: "emma@example.com", rank: 4, status: "Gold", lastActive: "2024-09-25", points: 12543 },
  { name: "James Davis", email: "james@example.com", rank: 5, status: "Silver", lastActive: "2024-09-24", points: 11987 },
]

export default function LeaderboardTab() {
  return (
    <Card className="bg-[#141414] border-0 mt-4">
      <CardHeader className="flex flex-row items-center justify-between px-6">
        <div>
          <CardTitle className="text-[rgba(191,219,254,1)]">Top Performers</CardTitle>
          <CardDescription className="text-[rgba(156,163,175,1)]">Recent achievements from our community.</CardDescription>
        </div>
        <div className="bg-[rgba(191,219,254,0.1)] p-2 rounded-md">
          <p className="text-[rgba(191,219,254,1)] font-semibold">Reward Pool: $10,000</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[rgba(156,163,175,1)]" />
          <Input className="pl-8 bg-[#141414] text-[rgba(229,231,235,1)] border-0 focus-visible:ring-1 focus-visible:ring-[rgba(191,219,254,0.3)]" placeholder="Search players..." />
        </div>
        <div className="space-y-4">
          {leaderboardData.map((player, index) => (
            <Card key={index} className="bg-[rgba(191,219,254,0.1)] border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-[rgba(229,231,235,1)]">{player.name}</p>
                      <p className="text-sm text-[rgba(156,163,175,1)]">{player.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[rgba(229,231,235,1)]">{player.points.toLocaleString()} pts</p>
                    <Badge className="mt-1" variant="secondary">{player.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}