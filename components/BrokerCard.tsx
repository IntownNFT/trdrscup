import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from "lucide-react"

interface BrokerCardProps {
  broker: {
    name: string
    description: string
    rating: number
  }
}

export default function BrokerCard({ broker }: BrokerCardProps) {
  return (
    <Card className="bg-[#141414] hover:bg-[rgba(191,219,254,0.1)] transition-colors duration-300 rounded-xl border-0">
      <CardHeader>
        <CardTitle className="text-[rgba(191,219,254,1)] flex items-center">
          <Building2 className="w-6 h-6 mr-2" />
          {broker.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[rgba(156,163,175,1)]">{broker.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.floor(broker.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-[rgba(156,163,175,1)]">{broker.rating.toFixed(1)}</span>
          </div>
          <Button variant="outline" className="text-[rgba(191,219,254,1)] hover:bg-[rgba(191,219,254,0.1)]">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}