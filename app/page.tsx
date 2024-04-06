import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col items-center justify-between p-24">
     <h1 className='text-black'>hellow</h1>
     <Link href= '/users'>Click here to users</Link>
    </main>
  )
}
