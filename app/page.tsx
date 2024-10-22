"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeaderboardContent from "@/components/LeaderboardContent"
import DashboardContent from "@/components/DashboardContent"

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f]">
      <Navbar showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {showDashboard ? <DashboardContent /> : <LeaderboardContent />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}