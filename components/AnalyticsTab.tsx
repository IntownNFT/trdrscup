import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', github: 4, website: 3 },
  { name: 'Feb', github: 3, website: 4 },
  { name: 'Mar', github: 5, website: 3 },
  { name: 'Apr', github: 2, website: 4 },
  { name: 'May', github: 3, website: 5 },
  { name: 'Jun', github: 4, website: 4 },
]

export default function AnalyticsTab({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <>
      <Card className="bg-[#141414] border-0 mt-4">
        <CardHeader>
          <CardTitle className="text-[rgba(191,219,254,1)]">Activity Overview</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          {!isSignedIn ? (
            <div className="absolute inset-0 backdrop-blur-sm z-10 flex items-center justify-center">
              <Button 
                className="bg-[rgba(191,219,254,1)] text-[#0f0f0f] hover:bg-[rgba(191,219,254,0.8)]"
              >
                Sign Up to View Full Graph
              </Button>
            </div>
          ) : null}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#E5E7EB'
                }}
              />
              <Line type="monotone" dataKey="github" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="website" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-[#141414] border-0 mt-4">
        <CardHeader>
          <CardTitle className="text-[rgba(191,219,254,1)]">Real-time Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[rgba(156,163,175,1)]">Real-time performance analytics for your trading activities.</p>
          <p className="text-[rgba(156,163,175,1)] mt-2">Track your progress and identify areas for improvement.</p>
        </CardContent>
      </Card>
    </>
  )
}