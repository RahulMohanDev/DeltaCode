import Image from 'next/image'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'home page',
}
 

export default function Home() {
  console.log("server page");
  return (
    <main>
      <h1>this is home page</h1>
    </main> 
  )
}
