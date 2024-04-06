import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main className="text-black">
     <h1 className='text-black'>hellow</h1>
     <Link href= '/users'>Click here to users</Link>
     <ProductCart/>
    </main>
  )
}
