import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Search, Link, BarChart3 } from "lucide-react"
import AnnouncementBanner from "./AnnouncementBanner"
import BrokerCard from "./BrokerCard"

const brokers = [
  { name: "Alpha Investments", description: "Leading broker for forex and commodities", rating: 4.5 },
  { name: "Beta Securities", description: "Specializing in stocks and ETFs", rating: 4.2 },
  { name: "Gamma Trading", description: "Advanced platform for experienced traders", rating: 4.7 },
  { name: "Delta Financial", description: "Comprehensive suite of investment products", rating: 4.0 },
  { name: "Epsilon Brokers", description: "Low-cost trading solutions for beginners", rating: 3.8 },
]

const howItWorksSteps = [
  { icon: Search, title: "Explore", description: "Browse our curated list of top-rated brokers" },
  { icon: Link, title: "Connect", description: "Link your preferred broker to TradeStreak" },
  { icon: BarChart3, title: "Track", description: "Monitor your performance and climb the leaderboard" },
]

export default function LeaderboardContent() {
  return (
    <>
      <div className="container pt-8 pb-16 lg:pt-12 lg:pb-24">
        <AnnouncementBanner />
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[rgba(191,219,254,1)]">
            TradeStreak Directory
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-xl text-[rgba(156,163,175,1)]">
            Explore our curated list of top brokers. Find the perfect match for your trading style and goals.
          </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"} className="bg-[rgba(191,219,254,1)] text-[#0f0f0f] hover:bg-[rgba(191,219,254,0.8)]">Explore Brokers</Button>
          <Button size={"lg"} variant={"outline"} className="text-[rgba(191,219,254,1)] hover:bg-[rgba(191,219,254,0.1)]">
            Compare Features
          </Button>
        </div>
      </div>

      <div className="container pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center text-[rgba(191,219,254,1)]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="bg-[#141414] border-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <step.icon className="h-12 w-12 mb-4 text-[rgba(191,219,254,1)]" />
                    <h3 className="text-lg font-semibold mb-2 text-[rgba(191,219,254,1)]">{step.title}</h3>
                    <p className="text-[rgba(156,163,175,1)]">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-left text-[rgba(191,219,254,1)]">Featured Brokers</h2>
          <div className="space-y-6">
            {brokers.map((broker, index) => (
              <BrokerCard key={index} broker={broker} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}