import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from "lucide-react"

export default function AccountsTab({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <Card className="bg-[#141414] border-0 mt-4">
      <CardHeader>
        <CardTitle className="text-[rgba(191,219,254,1)]">Linked Accounts</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        {!isSignedIn && (
          <div className="absolute inset-0 backdrop-blur-sm z-10 flex items-center justify-center">
            <Button 
              className="bg-[rgba(191,219,254,1)] text-[#0f0f0f] hover:bg-[rgba(191,219,254,0.8)]"
            >
              Sign Up to Link Accounts
            </Button>
          </div>
        )}
        <div className="space-y-4">
          {isSignedIn ? (
            <>
              <div className="flex justify-center">
                <Button 
                  className="bg-[rgba(191,219,254,1)] text-[#0f0f0f] hover:bg-[rgba(191,219,254,0.8)]"
                >
                  Connect Account
                </Button>
              </div>
              <p className="text-center text-[rgba(156,163,175,1)]">
                No accounts connected yet. Click the button above to link your first account.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between p-4 bg-[rgba(191,219,254,0.1)] rounded-lg">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-[rgba(191,219,254,1)]" />
                  <div>
                    <p className="font-medium text-[rgba(191,219,254,1)]">Alpha Investments</p>
                    <p className="text-sm text-[rgba(156,163,175,1)]">Last synced: 2 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-[rgba(191,219,254,1)] hover:bg-[rgba(191,219,254,0.1)]">
                  Sync
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-[rgba(191,219,254,0.1)] rounded-lg">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-[rgba(191,219,254,1)]" />
                  <div>
                    <p className="font-medium text-[rgba(191,219,254,1)]">Beta Securities</p>
                    <p className="text-sm text-[rgba(156,163,175,1)]">Last synced: 1 day ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-[rgba(191,219,254,1)] hover:bg-[rgba(191,219,254,0.1)]">
                  Sync
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}