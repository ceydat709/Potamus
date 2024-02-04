import Head from 'next/head'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div className='bg-[#010101] h-screen '>
      <Head>
        <title>Tailred</title>
        <meta name="description" content="A social networking and collaboration platform for users of all creative backgrounds" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      
      <NavBar/> 
    </div>
  )
}
