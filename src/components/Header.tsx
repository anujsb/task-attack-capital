import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="bg-accent  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogPlatform
        </Link>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/create-post">Create Post</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header