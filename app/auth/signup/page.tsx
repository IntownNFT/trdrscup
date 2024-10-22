"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signUp } from "@/actions/auth-actions"
import Link from "next/link"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const result = await signUp(email, password, name)

    if (result.status === 'error') {
      setError(result.message)
    } else {
      router.push("/auth/signin")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-[#1a1a1a] p-10 text-[rgba(229,231,235,1)]">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Create an account</h2>
        </div>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-[#2a2a2a] px-3 py-2 text-[rgba(229,231,235,1)] placeholder-gray-400 focus:z-10 focus:border-blue-200 focus:outline-none focus:ring-blue-200 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                autoComplete="new-password"
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
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <Link href="/auth/signin" className="text-blue-200 hover:text-blue-300">Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}