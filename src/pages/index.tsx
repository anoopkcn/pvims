import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center relative">
      <Head>
        <title>Solar materials vault</title>
      </Head>
      <div className='text-2xl text-center'> Solar materials vault </div>
      <div className='p-2'/> 
      <div className="border rounded p-8 flex flex-col max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ullam autem illum? Veritatis odit animi est dolorum illo, vero tenetur quam temporibus dignissimos culpa aut ratione consequatur? Non, reprehenderit quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque quidem sint nobis quia, maxime maiores ab architecto non rerum atque inventore illo? Maiores sunt iste voluptates, adipisci sit saepe.
      </div>
      <div className='p-2'/> 
    </div>
  )
}

export default Home
