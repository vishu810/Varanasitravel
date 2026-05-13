'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.error) setError('Invalid credentials')
    else router.push('/admin')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-night-950">
      <div className="glass-card w-full max-w-md p-8">
        <h1 className="text-center font-display text-3xl font-bold">Admin Login</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg bg-night-800 p-3 text-white" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg bg-night-800 p-3 text-white" required />
          {error && <p className="text-red-400">{error}</p>}
          <button type="submit" className="w-full rounded-lg bg-gold-500 py-3 font-bold text-night-950">Sign In</button>
        </form>
      </div>
    </div>
  )
}