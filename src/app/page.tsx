import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { InteractiveLandingPage } from '@/components/interactive-landing-page'

export default async function Home() {
  const { userId } = await auth()
  
  // If user is signed in, redirect to dashboard
  if (userId) {
    redirect('/dashboard')
  }

  return (
    <SignedOut>
      <InteractiveLandingPage />
    </SignedOut>
  )
}