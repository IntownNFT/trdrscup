import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsTab from "./AnalyticsTab"
import AccountsTab from "./AccountsTab"
import LeaderboardTab from "./LeaderboardTab"

export default function DashboardContent() {
  const { data: session, status } = useSession()
  const isSignedIn = status === "authenticated"

  return (
    <div className="container pt-8 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Avatar className="h-20 w-20 mr-4">
            <AvatarImage src="/placeholder-avatar.png" alt={session?.user?.name || 'User'} />
            <AvatarFallback>{session?.user?.name?.[0] || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-[rgba(191,219,254,1)]">
              Welcome, {session?.user?.name || 'Trader'}!
            </h1>
            <p className="text-[rgba(156,163,175,1)]">Track your progress, manage your accounts, and climb the leaderboard.</p>
          </div>
        </div>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#141414]">
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[rgba(191,219,254,0.1)] data-[state=active]:text-[rgba(191,219,254,1)]">Analytics</TabsTrigger>
            <TabsTrigger value="accounts" className="data-[state=active]:bg-[rgba(191,219,254,0.1)] data-[state=active]:text-[rgba(191,219,254,1)]">Accounts</TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-[rgba(191,219,254,0.1)] data-[state=active]:text-[rgba(191,219,254,1)]">Leaderboard</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics">
            <AnalyticsTab isSignedIn={isSignedIn} />
          </TabsContent>
          <TabsContent value="accounts">
            <AccountsTab isSignedIn={isSignedIn} />
          </TabsContent>
          <TabsContent value="leaderboard">
            <LeaderboardTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}