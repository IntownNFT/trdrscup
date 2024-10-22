"use client"

import { Button } from "@/components/ui/button"
import { Mountain } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar({ showDashboard, setShowDashboard }: { showDashboard: boolean, setShowDashboard: (show: boolean) => void }) {
  const { status } = useSession()

  return (
    <nav className="w-full" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: '56px' }}>
          <div className="flex items-center">
            <Mountain className="h-8 w-8 mr-2" style={{ color: 'rgba(191,219,254,1)' }} />
            <span className="text-xl font-semibold" style={{ color: 'rgba(191,219,254,1)' }}>TradeStreak</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              onClick={() => setShowDashboard(!showDashboard)}
              className="text-blue-200 hover:bg-blue-200 hover:text-blue-900"
            >
              {showDashboard ? "Directory" : "Dashboard"}
            </Button>
            {status === "authenticated" ? (
              <Button onClick={() => signOut()} className="text-blue-200 hover:bg-blue-200 hover:text-blue-900">
                Sign Out
              </Button>
            ) : (
              <Link href="/auth/signin">
                <Button className="text-blue-200 hover:bg-blue-200 hover:text-blue-900">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}