"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError(result.error)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-[#1a1a1a] p-10 text-[rgba(229,231,235,1)]">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Sign in to your account</h2>
        </div>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-[#2a2a2a] px-3 py-2 text-[rgba(229,231,235,1)] placeholder-gray-400 focus:z-10 focus:border-blue-200 focus:outline-none focus:ring-blue-200 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-[#2a2a2a] px-3 py-2 text-[rgba(229,231,235,1)] placeholder-gray-400 focus:z-10 focus:border-blue-200 focus:outline-none focus:ring-blue-200 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>Don't have an account? <Link href="/auth/signup" className="text-blue-200 hover:text-blue-300">Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}